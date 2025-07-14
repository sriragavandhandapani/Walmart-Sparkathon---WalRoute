
"use client"

import { useState, useMemo, useEffect } from "react"
import { subMonths, subYears, startOfMonth } from 'date-fns';
import {
  Line,
  LineChart,
  Bar,
  BarChart,
  Area,
  AreaChart,
  Pie,
  PieChart,
  Cell,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from 'recharts';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/chart"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Skeleton } from "@/components/ui/skeleton";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Sparkles, TrendingDown, TrendingUp, AlertTriangle } from "lucide-react";
import { getInventoryInsights, type InventoryInsightsOutput } from "@/ai/flows/inventory-insights-flow";


const generateData = () => {
  const data = [];
  const today = new Date();
  for (let i = 60; i >= 0; i--) {
    const date = startOfMonth(subMonths(today, i)).toISOString().split('T')[0];
    data.push({
      date,
      overstock: Math.floor(Math.random() * (200 - 50 + 1) + 50),
      understock: Math.floor(Math.random() * (80 - 10 + 1) + 10),
      expired: Math.floor(Math.random() * (40 - 5 + 1) + 5),
    });
  }
  return data;
};

const fullData = generateData();

const chartConfig = {
  overstock: {
    label: "Overstocked",
    color: "hsl(var(--chart-4))",
  },
  understock: {
    label: "Understocked",
    color: "hsl(var(--chart-1))",
  },
  expired: {
    label: "Expired",
    color: "hsl(var(--destructive))",
  },
} satisfies Record<string, { label: string; color: string; }>;

export function AnalyticsView() {
  const [timeRange, setTimeRange] = useState("12");
  const [chartType, setChartType] = useState<"line" | "bar" | "area" | "pie">("line");
  const [insights, setInsights] = useState<InventoryInsightsOutput | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const filteredData = useMemo(() => {
    const months = parseInt(timeRange);
    const startDate = startOfMonth(subMonths(new Date(), months - 1));
    return fullData.filter(d => new Date(d.date) >= startDate);
  }, [timeRange]);

  const aggregatedData = useMemo(() => {
    if (chartType !== 'pie') return [];
    
    const totals = filteredData.reduce((acc, item) => {
        acc.overstock += item.overstock;
        acc.understock += item.understock;
        acc.expired += item.expired;
        return acc;
    }, { overstock: 0, understock: 0, expired: 0 });

    return Object.entries(totals).map(([name, value]) => ({
        name: chartConfig[name as keyof typeof chartConfig].label,
        value,
        fill: `var(--color-${name})`,
    }));
  }, [filteredData, chartType]);

  useEffect(() => {
    setIsLoading(true);
    setError(null);
    getInventoryInsights({ data: filteredData })
      .then(setInsights)
      .catch(e => {
        console.error("Failed to get inventory insights:", e);
        setError("Could not generate AI insights at this time.");
      })
      .finally(() => setIsLoading(false));
  }, [filteredData]);

  const renderChart = () => {
    const commonProps = {
        data: filteredData,
        margin: { top: 5, right: 20, left: -10, bottom: 5 },
    };
    const commonXAxis = (
        <XAxis
            dataKey="date"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            tickFormatter={(value) => new Date(value).toLocaleDateString("en-US", { month: 'short', year: '2-digit' })}
        />
    );
    const commonTooltip = <Tooltip content={<ChartTooltipContent />} />;

    switch (chartType) {
        case 'bar':
            return (
                <BarChart {...commonProps}>
                    <CartesianGrid vertical={false} strokeDasharray="3 3" />
                    {commonXAxis}
                    <YAxis />
                    {commonTooltip}
                    <Legend content={<ChartLegendContent />} />
                    <Bar dataKey="overstock" stackId="a" fill="var(--color-overstock)" />
                    <Bar dataKey="understock" stackId="a" fill="var(--color-understock)" />
                    <Bar dataKey="expired" fill="var(--color-expired)" />
                </BarChart>
            );
        case 'area':
            return (
                <AreaChart {...commonProps}>
                    <CartesianGrid vertical={false} strokeDasharray="3 3" />
                    {commonXAxis}
                    <YAxis />
                    {commonTooltip}
                    <Legend content={<ChartLegendContent />} />
                    <Area dataKey="overstock" type="monotone" fill="var(--color-overstock)" stroke="var(--color-overstock)" stackId="1" />
                    <Area dataKey="understock" type="monotone" fill="var(--color-understock)" stroke="var(--color-understock)" stackId="1" />
                    <Area dataKey="expired" type="monotone" fill="var(--color-expired)" stroke="var(--color-expired)" stackId="1" />
                </AreaChart>
            );
        case 'pie':
             return (
                <PieChart>
                    {commonTooltip}
                    <Pie data={aggregatedData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={120} innerRadius={80} labelLine={false} label={({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
                        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
                        const x = cx + radius * Math.cos(-midAngle * (Math.PI / 180));
                        const y = cy + radius * Math.sin(-midAngle * (Math.PI / 180));
                        return (
                            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                            {`${(percent * 100).toFixed(0)}%`}
                            </text>
                        );
                    }}>
                        {aggregatedData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.fill} />
                        ))}
                    </Pie>
                    <Legend content={<ChartLegendContent />} />
                </PieChart>
            );
        case 'line':
        default:
            return (
                <LineChart {...commonProps}>
                    <CartesianGrid vertical={false} strokeDasharray="3 3" />
                    {commonXAxis}
                    <YAxis />
                    {commonTooltip}
                    <Legend content={<ChartLegendContent />} />
                    <Line dataKey="overstock" type="monotone" stroke="var(--color-overstock)" strokeWidth={2} dot={false} />
                    <Line dataKey="understock" type="monotone" stroke="var(--color-understock)" strokeWidth={2} dot={false} />
                    <Line dataKey="expired" type="monotone" stroke="var(--color-expired)" strokeWidth={2} dot={false} />
                </LineChart>
            );
    }
  }

  return (
    <div className="space-y-6">
      <Card className="glass-card">
        <CardHeader className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <CardTitle>Inventory Analytics</CardTitle>
            <CardDescription>
              Trends for overstocked, understocked, and expired items.
            </CardDescription>
          </div>
          <div className="flex gap-2">
            <Select value={timeRange} onValueChange={setTimeRange}>
                <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select time range" />
                </SelectTrigger>
                <SelectContent>
                <SelectItem value="3">Last 3 Months</SelectItem>
                <SelectItem value="6">Last 6 Months</SelectItem>
                <SelectItem value="12">Last 1 Year</SelectItem>
                <SelectItem value="60">Last 5 Years</SelectItem>
                </SelectContent>
            </Select>
            <Select value={chartType} onValueChange={(value) => setChartType(value as any)}>
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select chart type" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="line">Line Chart</SelectItem>
                    <SelectItem value="bar">Bar Chart</SelectItem>
                    <SelectItem value="area">Area Chart</SelectItem>
                    <SelectItem value="pie">Pie Chart</SelectItem>
                </SelectContent>
            </Select>
          </div>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig} className="min-h-[300px] w-full">
            {renderChart()}
          </ChartContainer>
        </CardContent>
      </Card>

      <Card className="glass-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Sparkles /> AI-Powered Insights
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {isLoading ? (
            <div className="space-y-3">
              <Skeleton className="h-6 w-3/4" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-5/6" />
            </div>
          ) : error ? (
            <Alert variant="destructive">
                <AlertTriangle className="h-4 w-4" />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>{error}</AlertDescription>
            </Alert>
          ) : insights ? (
            <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3 p-3 bg-green-950/40 rounded-lg">
                    <TrendingUp className="h-5 w-5 text-green-400 mt-1" />
                    <div>
                        <h4 className="font-semibold text-green-400">What's Going Well</h4>
                        <p className="text-muted-foreground">{insights.positiveInsight}</p>
                    </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-yellow-950/40 rounded-lg">
                    <TrendingDown className="h-5 w-5 text-yellow-400 mt-1" />
                    <div>
                        <h4 className="font-semibold text-yellow-400">Areas for Improvement</h4>
                        <p className="text-muted-foreground">{insights.negativeInsight}</p>
                    </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-blue-950/40 rounded-lg">
                    <AlertTriangle className="h-5 w-5 text-blue-400 mt-1" />
                    <div>
                        <h4 className="font-semibold text-blue-400">Key Recommendation</h4>
                        <p className="text-muted-foreground">{insights.recommendation}</p>
                    </div>
                </div>
            </div>
          ) : (
             <p className="text-muted-foreground">No insights available.</p>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
