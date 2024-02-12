import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { CardWithForm } from "./cards"
import CardUi from "./cards-ui"

export function TabsDemo() {
  return (
    <Tabs defaultValue="code" className="max-w-[1400px] mx-auto">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="code">code</TabsTrigger>
        <TabsTrigger value="result">result</TabsTrigger>
        <TabsTrigger value="playground">playground</TabsTrigger>
      </TabsList>
      <TabsContent value="code">
        <Card>
          <CardHeader>
            <CardTitle>code</CardTitle>
            <CardDescription>
              Make changes to your code here. Click save when you're done.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="name">Name</Label>
              <Input id="name" defaultValue="Pedro Duarte" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="username">Username</Label>
              <Input id="username" defaultValue="@peduarte" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Save changes</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="result">
        <Card>
          <CardHeader>
            <CardTitle>result</CardTitle>
            <CardDescription>
              Change your result here. After saving, you'll be logged out.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="current">Current result</Label>
              <Input id="current" type="result" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="new">New result</Label>
              <Input id="new" type="result" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Save result</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="playground" className="flex">
        <CardUi />
      </TabsContent>
    </Tabs>
  )
}
