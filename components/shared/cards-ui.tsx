import React from 'react'
import { CardWithForm } from './cards'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { CardDemo } from './notification-card'

export default function CardUi() {

    return (
        <>
            <div className="flex flex-wrap w-full  items-start gap-10 justify-between pt-10">
                <CardWithForm />

                <CardWithForm />
                <CardDemo />
                <Card>
                    <CardHeader>
                        <CardTitle>PayMall</CardTitle>
                        <CardDescription>

                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">

                        <div className="space-y-1">
                            <Label htmlFor="new">Payment</Label>
                            <Input id="new" type="playground" />
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button>Pay</Button>
                    </CardFooter>
                </Card>
            </div>
        </>
    )
}
