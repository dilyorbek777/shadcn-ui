"use client"
import { framework } from '@/utils'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Install() {

    return (
        <div>
            {framework.map(e => (
                <Link href={'installation/' + e.url} className="flex">
                    <Image src={e.iconLight} width={30} className='flex dark:hidden' height={30} alt='drftgh' />
                    <Image src={e.iconDark} className='hidden dark:flex' width={30} height={30} alt='drftgh' />
                </Link>
            ))}
        </div>
    )
}
