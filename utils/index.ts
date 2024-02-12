export const docs = [
    {
        title: "Introduction",
        url: "intro",
        body: `Beautifully designed components that you can copy and paste into your apps. Accessible. Customizable. Open Source.\n
This is NOT a component library. It's a collection of re-usable components that you can copy and paste into your apps.\n
What do you mean by not a component library?\n
I mean you do not install it as a dependency. It is not available or distributed via npm.\n
Pick the components you need. Copy and paste the code into your project and customize to your needs. The code is yours.\n
Use this as a reference to build your own component libraries.`

    },
    {
        title: "Installation",
        url: "installation",
        body: `How to install dependencies and structure your app.`
    }
]

export const framework = [
    {
        iconLight: '/icons/next-light.png',
        iconDark: '/icons/next-dark.png',
        title: "Next JS",
        url: "next",
        steps: {
            name: "Create project",
            doc: "Start by creating a new Next.js project using #create-next-app#:",
            copy: "npx create-next-app@latest my-app --typescript --tailwind --eslint"
        },
        text: "This project and the components are written in TypeScript.We recommend using TypeScript for your project as well. However we provide a JavaScript version of the components as well.The JavaScript version is available via the cli. To opt- out of TypeScript, you can use the tsx flag in your components.json file."
    }
]


