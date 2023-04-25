import { a as a$1 } from './chunk-MZUKW3DH.mjs';
import { a } from './chunk-U6DJLCJW.mjs';
import { Combobox, Transition } from '@headlessui/react';
import { HiChevronUpDown, HiCheck } from 'react-icons/hi2';
import { cva } from 'cva';
import O from 'fuse.js';
import { useState, useMemo, Fragment } from 'react';
import { useFormContext, Controller } from 'react-hook-form';
import { jsx, jsxs, Fragment as Fragment$1 } from 'react/jsx-runtime';

var l=cva("",{variants:{color:{twitter:"bg-twitter-100 text-twitter-900",orange:"bg-amber-100 text-amber-900",pink:"bg-rose-100 text-rose-900",emerald:"bg-emerald-100 text-emerald-900",darkNavy:"bg-stripes-indigo text-white"},iconColor:{twitter:"text-twitter-600",orange:"text-amber-600",pink:"text-rose-600",emerald:"text-emerald-600",darkNavy:"text-white"},width:{narrower:"max-w-xs",narrow:"max-w-sm",regular:"max-w-md",wide:"max-w-lg",wider:"max-w-xl"}}});function H({list:u,name:v,color:o="twitter",width:d="regular",labelKey:r,imageKey:p,removeDuplicates:y,...w}){let{control:h}=useFormContext(),[c,g]=useState(""),f=y?useMemo(()=>a(u,r),[u]):u,N=new O(f,{includeScore:!0,threshold:.3,keys:[String(r)]}),x=c===""?f:N.search(c).map(a=>({...a.item})),C=o;return jsx(Controller,{name:v,control:h,render:({field:a})=>jsx(Combobox,{defaultValue:a.value,onChange:a.onChange,refName:a.name,children:jsxs("div",{className:"relative flex-1",children:[jsxs("div",{className:a$1(`relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left text-xs shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 ${l({width:d})} ${o==="darkNavy"&&"rounded-none border-b border-gray-800 bg-gray-900 hover:border-gray-700/70"}`),children:[jsx(Combobox.Input,{className:a$1(`w-full rounded-lg border-none py-2 pl-3 text-xs text-gray-900 focus:outline-none focus:ring-0 ${l({width:d})} ${o==="darkNavy"&&"bg-gray-900 text-white/80"}`),placeholder:"Search...",spellCheck:"false",displayValue:t=>String(t[r]),onChange:t=>g(t.target.value)}),jsx(Combobox.Button,{className:"absolute inset-y-0 right-0 flex items-center pr-2",children:jsx(HiChevronUpDown,{className:"h-5 w-5 text-gray-400","aria-hidden":"true"})})]}),jsx(Transition,{as:Fragment,leave:"transition ease-in duration-100",leaveFrom:"opacity-100",leaveTo:"opacity-0",afterLeave:()=>g(""),children:jsx(Combobox.Options,{className:a$1(`absolute z-10 mt-1 max-h-80 w-full overflow-auto rounded-md bg-white shadow-xl ring-1 ring-black ring-opacity-5 drop-shadow-xl backdrop-blur-sm focus:outline-none sm:text-sm ${w.className} ${o==="darkNavy"&&"bg-gray-900/90 text-white/80"}`),children:x.length===0&&c!==""?jsx("div",{className:"relative cursor-default select-none px-4 py-2 text-gray-700",children:"Nothing found."}):x.map((t,k)=>jsx(Combobox.Option,{className:({active:s})=>`relative cursor-default select-none py-2 pl-10 pr-4 ${s?l({color:o}):o==="darkNavy"?"bg-gray-900 text-white/80":"text-gray-900"}`,value:t,children:({selected:s,active:z})=>jsxs(Fragment$1,{children:[jsxs("div",{className:"flex items-center gap-3",children:[p&&jsx("img",{className:"h-10 w-10 rounded-full",src:String(t[p])}),jsx("span",{className:`block truncate ${s?"font-extrabold":"font-normal"}`,children:String(t[r])})]}),s?jsx("span",{className:`absolute inset-y-0 left-0 flex items-center pl-3 ${l({iconColor:C})}`,children:jsx(HiCheck,{className:"h-5 w-5","aria-hidden":"true"})}):null]})},`${String(t[r])}+ ${k}`))})})]})})})}

export { H as a };
