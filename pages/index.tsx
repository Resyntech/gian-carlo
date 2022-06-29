import React from "react"
import ReactToPrint from "react-to-print"
import Resume from "../components/Resume"
// import { Canvas } from "@react-three/fiber"
// import Box from "../components/ThreeComponents/Box"
import Link from "next/link"
import Image from "next/image"

export default function Home() {
  const ref: any = React.useRef()
  interface Social {
    details: Array<{
      href: string
      label: string
      delay?: string
    }>
  }
  const dimension: number = 40
  const social: Social = {
    details: [
      {
        href: "https://www.fiverr.com/resyntech",
        label: "fiverr",
        delay: "delay-1",
      },
      {
        href: "https://github.com/Resyntech",
        label: "github",
        delay: "delay-2",
      },
      {
        href: "https://www.linkedin.com/in/gian-carlo-carranza-5a6861216/",
        label: "linkedin",
        delay: "delay-3",
      },
      {
        href: "https://www.youtube.com/channel/UCtnF1a7ZVYnt-ybxErb1TDg",
        label: "youtube",
        delay: "delay-4",
      },
    ],
  }

  return (
    // <Canvas className="bg-yellow-600">
    //   <Box position={[-1.2, 0, 0]} />
    <>
      <div ref={ref}>
        <Resume />
      </div>
      <div className="flex items-center justify-center gap-2 fixed bottom-0 bg-white/20 inset-x-0 p-4">
        <ReactToPrint
          trigger={() => <Button>Print</Button>}
          content={() => ref.current}
        />
        <div className="grid grid-flow-col gap-2">
          {social.details.map(({ href, label, delay }, I: number) => (
            <Link key={I} href={href} passHref>
              <Anchor className={`${delay}`}>
                <Image
                  alt={`${label.substring(0, 1).toUpperCase()}${label.substring(
                    1,
                    label.length
                  )}`}
                  src={`/${label}.svg`}
                  width={dimension}
                  height={dimension}
                />
              </Anchor>
            </Link>
          ))}
        </div>
      </div>
    </>
    // </Canvas>
  )
}

const Anchor = React.forwardRef(
  (props: JSX.IntrinsicElements["a"], ref: any) => {
    return (
      <a
        {...props}
        ref={ref}
        className={`${props.className} text-blue-400 font-black animate-bounce underline`}
      >
        {props.children}
      </a>
    )
  }
)

Anchor.displayName = "AnchorComponent"

function Button(props: JSX.IntrinsicElements["button"]) {
  return (
    <button
      className="capitalize border-2 border-blue-400 text-blue-400 px-4 py-2 rounded-lg"
      onClick={props.onClick}
    >
      {props.children}
    </button>
  )
}
