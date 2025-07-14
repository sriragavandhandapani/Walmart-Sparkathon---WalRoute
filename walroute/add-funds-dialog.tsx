
"use client";

import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Banknote, CreditCard, Plus, Wallet } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

interface AddFundsDialogProps {
    onUpdateWallet: (amount: number) => void;
    children?: React.ReactNode;
}

export function AddFundsDialog({ onUpdateWallet, children }: AddFundsDialogProps) {
  const [amount, setAmount] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvc, setCvc] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const { toast } = useToast();
  
  const validateAndAddFunds = () => {
    const numericAmount = parseFloat(amount);
    if (isNaN(numericAmount) || numericAmount <= 0) {
      toast({
        variant: 'destructive',
        title: 'Invalid Amount',
        description: 'Please enter a valid positive number to add funds.',
      });
      return;
    }

    const cardNumberRegex = /^\d{4} \d{4} \d{4} \d{4}$/;
    if (!cardNumberRegex.test(cardNumber)) {
        toast({ variant: 'destructive', title: 'Invalid Card Number', description: 'Please use the format XXXX XXXX XXXX XXXX.' });
        return;
    }

    if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(expiry)) {
        toast({ variant: 'destructive', title: 'Invalid Expiry Date', description: 'Please use MM/YY format.' });
        return;
    }
    
    const [month, year] = expiry.split('/').map(num => parseInt(num, 10));
    const currentYear = new Date().getFullYear() % 100;
    const currentMonth = new Date().getMonth() + 1;
    
    if (year < currentYear || (year === currentYear && month < currentMonth)) {
      toast({ variant: 'destructive', title: 'Card Expired', description: 'This credit card has expired.' });
      return;
    }
    
    if (!cvc.trim() || !/^\d{3,4}$/.test(cvc)) {
        toast({ variant: 'destructive', title: 'Invalid CVC', description: 'Please enter a valid 3 or 4 digit CVC.' });
        return;
    }
    
    // In a real app, you would process the payment here.
    // We'll just simulate success.
    onUpdateWallet(numericAmount);
    toast({
      title: 'Funds Added!',
      description: `$${numericAmount.toFixed(2)} has been successfully added to your wallet.`,
    });

    // Reset fields
    setAmount('');
    setCardNumber('');
    setExpiry('');
    setCvc('');
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {children || (
          <Button variant="outline" size="icon">
            <Plus className="h-4 w-4" />
            <span className="sr-only">Add Funds</span>
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Wallet /> Add Funds to Wallet
          </DialogTitle>
          <DialogDescription>
            Enter the amount and your payment details. This will be charged to your saved payment method.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="amount">Amount</Label>
            <div className="relative">
              <Banknote className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                id="amount"
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="e.g., 50.00"
                className="pl-10"
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="card-number-dialog">Card Number</Label>
            <div className="relative">
                <CreditCard className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input id="card-number-dialog" placeholder="1111 1111 1111 1111" className="pl-10" value={cardNumber} onChange={e => setCardNumber(e.target.value)} />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                  <Label htmlFor="expiry-dialog">Expiry</Label>
                  <Input id="expiry-dialog" placeholder="MM/YY" value={expiry} onChange={e => setExpiry(e.target.value)} />
              </div>
              <div className="space-y-2">
                  <Label htmlFor="cvc-dialog">CVC</Label>
                  <Input id="cvc-dialog" placeholder="123" value={cvc} onChange={e => setCvc(e.target.value)} />
              </div>
          </div>
        </div>
        <DialogFooter>
          <Button type="button" onClick={validateAndAddFunds}>Add Funds</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
