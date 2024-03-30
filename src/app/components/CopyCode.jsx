'use client'
import React, { useState } from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { atomOneDark} from 'react-syntax-highlighter/dist/esm/styles/hljs'

function CopyCode({copyCode}) {
    
    const [copyText, setCopyText] = useState(false)
    const copyHandleClick = async () => {
        setCopyText(true)
        setTimeout(()=>{
            setCopyText(false)
        },4000)
        navigator.clipboard.writeText(copyCode)
    }
  return (
    <>
    <div className='max-w-2xl min-w-[25rem] bg-[#3a404d] rounded-md overflow-hidden'>
        <div className='flex justify-between px-4 text-white text-xs items-center'>
            <p className='text-sm'>Code</p>
            {copyText?<p>Copied!</p>:<button className='py-1 inline-flex items-center gap-1' onClick={copyHandleClick}>Copy Code</button>}
            
        </div>
        <SyntaxHighlighter
        language='jsx' 
        style={atomOneDark} 
        customStyle={{
            padding:"25px"
        }}
        wrapLongLines={true}
        >
            {copyCode}
        </SyntaxHighlighter>
    </div>
    </>
  )
}

export default CopyCode