import React from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import { TrashIcon, DownloadIcon, RocketIcon } from "@radix-ui/react-icons";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const Test = () => {
  return (
    <div>
      <Button variant="outline">Button</Button>
      <Button variant="destructive">Button</Button>
      <Button variant="default">Button</Button>
      <Button variant="link">Button</Button>
      {/* Icon */}
      <Button variant="destructive">
        <TrashIcon className="h-4 w-4" /> Delete
      </Button>
      <Button disabled>
        Uploading <DownloadIcon className="ml-2 h-4 w-4 animate-bounce" />
      </Button>
      {/* Link  */}

      <Button asChild variant="ghost">
        <Link href="/login">Login</Link>
      </Button>
      {/* Alert */}
      <Alert>
        <RocketIcon className="h-4 w-4" />
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>
          You can add components to your app using the cli.
        </AlertDescription>
      </Alert>
      {/* Card */}
      <Card>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
        <CardFooter className="justify-end">
          <p>Card Footer</p>
        </CardFooter>
      </Card>
    </div>
  );
};
