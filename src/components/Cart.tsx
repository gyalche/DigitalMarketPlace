'use client';
import React from 'react';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from './ui/sheet';
import { ShoppingCartIcon } from 'lucide-react';
import { Separator } from './ui/separator';
import { formatPrice } from '@/lib/utils';
import Link from 'next/link';
import { Button, buttonVariants } from '@/components/ui/button';
import Image from 'next/image';

export default function Cart() {
  const itemCount = 0;
  return (
    <Sheet>
      <SheetTrigger className="group -m-2 flex">
        <ShoppingCartIcon className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500" />
        <span className="ml-2 text-sm  font-medium text-gray-700 group-hover:text-gray-800">
          0
        </span>
      </SheetTrigger>
      <SheetContent className="flex w-full flex-col pr-0 sm:max-w-lg">
        <SheetHeader className="space-x-2.5 pr-6">
          <SheetTitle>Cart(0)</SheetTitle>
        </SheetHeader>
        {itemCount > 0 ? (
          <>
            <div className="flex w-full flex-col pr-6">
              {/*TODO: CARD LOGIC */}
              cart items
            </div>
            <div className="space-y-4 pr-6">
              <Separator />
              <div className="space-y-1.5 text-sm">
                <div className="flex">
                  <span className="flex-1">Shipping</span>
                  <span>Free</span>
                </div>
                <div className="flex">
                  <span className="flex-1">Transaction fee</span>
                  <span>{formatPrice(1)}</span>
                </div>

                <div className="flex">
                  <span className="flex-1">Total</span>
                  <span>{formatPrice(1)}</span>
                </div>
              </div>
              <SheetFooter>
                <SheetTrigger asChild>
                  <Link
                    href="/cart"
                    className={buttonVariants({
                      variant: 'link',
                      size: 'sm',
                      className: 'text-sm text-muted-foreground',
                    })}
                  >
                    Continue to checkout
                  </Link>
                </SheetTrigger>
              </SheetFooter>
            </div>
          </>
        ) : (
          <div className="flex h-full flex-col items-center justify-center space-y-1">
            <div
              aria-hidden="true"
              className="relative mb-4 h-60 w-60 text-muted-foreground"
            >
              <Image
                src="https://img.freepik.com/free-vector/man-shopping-supermarket_74855-7612.jpg?w=740&t=st=1709396248~exp=1709396848~hmac=7490dae78ae7b099c8c67ecb5b8a20c67975ec2e407c1d5ca44a22f1c75ef7c8"
                alt="cart-empty"
                fill
              />
            </div>
            <div className="text-xl font-semibold">Your cart is empty</div>
            <SheetTrigger asChild>
              <Link
                href={{ pathname: '/products' }}
                className={buttonVariants({
                  variant: 'link',
                  size: 'sm',
                  className: 'text-sm text-muted-foreground',
                })}
              >
                Add Items to your cart to checkout
              </Link>
            </SheetTrigger>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}
