"use client"
import { AccordionDemo } from '@/components/shared/accordion';
import LinkToDoc from '@/components/shared/link-to-doc';
import { Button } from '@/components/ui/button';
import { docs } from '@/utils';
import React from 'react'

export default function Docs() {
    const links = "base" + "share";
    const copylink = () => {
        navigator.clipboard.writeText(links)
    }
    const doc = docs[0]
    return (
        <>
            <section className="mx-auto flex max-w-[980px]  h-[90vh] justify-center flex-col items-center gap-2 py-8 md:py-12 md:pb-8 lg:py-24 lg:pb-20">
                <a className="inline-flex items-center rounded-lg bg-muted px-3 py-1 text-sm font-medium" href="/docs/changelog">🎉 <div data-orientation="vertical" role="none" className="shrink-0 bg-border w-[1px] mx-2 h-4">
                </div> <span className="sm:hidden">New components and more.</span>
                    <span className="hidden sm:inline">New components, cli updates and more.</span>
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-1 h-4 w-4">
                        <path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd">
                        </path>
                    </svg>
                </a>
                <h1 className="text-center text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1] hidden md:block">Read  the documentation and instuctions you need</h1>
                <h1 className="text-center text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1] md:hidden">Examples</h1>
                <span className="max-w-[750px] text-center text-lg text-muted-foreground sm:text-xl" data-br=":rdk:" data-brr="1" >Code examples, site components & descriptions and more.</span>
                {/* <script>self.__wrap_b=(e,t,n)=>{let r=(n=n||document.querySelector(`[data-br="${e}"]`)).parentElement,a=e=>n.style.maxWidth=e+"px";n.style.maxWidth="";let s=r.clientWidth,i=r.clientHeight,l=s/2-.25,o=s+.5,c;if(s){for(;l+1<o;)a(c=Math.round((l+o)/2)),r.clientHeight===i?o=c:l=c;a(o*t+s*(1-t))}n.__wrap_o||"undefined"!=typeof ResizeObserver&&(n.__wrap_o=new ResizeObserver(()=>{self.__wrap_b(0, +n.dataset.brr, n)})).observe(r)};self.__wrap_b(":rdk:",1)</script> */}
                <div className="flex w-full items-center justify-center space-x-4 py-4 md:pb-10">
                    <a className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2 rounded-[6px]" href="/docs/intro">Get Started</a>
                    <a className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 rounded-[6px]" href="/components">Components</a>
                </div>
            </section>

            {/* <div classNameName="pb-12 pt-8 ">
                <pre classNameName="mdx font-sans text-base">
                    {doc.body}
                </pre>
                <h1 classNameName='font-heading mt-12 scroll-m-20 border-b pb-2 text-2xl  tracking-tight first:mt-0 font-bold'>Faq</h1>
                <AccordionDemo />

            </div>

            <div classNameName="flex flex-row items-center justify-between">
                <a classNameName="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 ml-auto" href="/docs/installation">Installation<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" classNameName="ml-2 h-4 w-4">
                    <path d="M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd">
                    </path>
                </svg>
                </a>
            </div> */}
        </>
    )
}
