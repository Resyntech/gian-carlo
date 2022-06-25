import { useAppSelector } from "../src/redux/hooks"
import Image from "next/image"

const dimension = 14
const Resume = () => {
  const resume = useAppSelector((state) => state.resume)
  const info = resume.info
  return (
    <section className="h-screen">
      <Header
        name={info.name}
        email={info.email}
        num={info.num}
        address={info.address}
      />
      <div className="grid grid-cols-[minmax(0,2fr),minmax(0,1fr)] ">
        <Experiences />
        <Personal />
      </div>
    </section>
  )
}

const Header = (props: any) => {
  return (
    <header className="bg-secondary text-white p-6">
      <div>
        <h1 className="text-3xl font-bold">{props.name}</h1>
        <PhoneNumber num={props.num} />
        <div className="flex gap-2">
          <Image
            src="/envelope-solid.svg"
            alt="envelope-icon"
            width={dimension}
            height={dimension}
          />
          <p>{props.email}</p>
        </div>
        <div className="flex gap-2">
          <Image
            src="/location-dot-solid.svg"
            alt="location-icon"
            width={dimension}
            height={dimension}
          />
          <p>{props.address}</p>
        </div>
      </div>
      <div className="absolute top-4 right-6">
        <Image
          src="/avatar.jpg"
          alt="profile-picture"
          width={dimension * 8}
          height={dimension * 8}
        />
      </div>
    </header>
  )
}

const Experiences = () => {
  const main = useAppSelector((state) => state.resume.main)
  return (
    <div className="bg-paper">
      {main.map(({ title, info }, I: number) => (
        <section key={I}>
          <div className="flex gap-2 m-2">
            <Image
              alt="header-icons"
              src={
                title === "Achievements"
                  ? "/trophy-solid.svg"
                  : title === "Education"
                  ? "/graduation-cap-solid.svg"
                  : "/briefcase-solid.svg"
              }
              width={dimension}
              height={dimension}
            />
            <h1 className="text-xl font-bold">{title}</h1>
          </div>
          {info.map(({ desc, location, date }, index: number) => (
            <div key={index} className="m-6">
              {location && <p className="font-bold">{location}</p>}
              {desc && <p className="font-semibold">{desc}</p>}
              {date && <p>{date}</p>}
            </div>
          ))}
        </section>
      ))}
    </div>
  )
}
const Personal = () => {
  const charSet = useAppSelector((state) => state.resume.charRef)
  return (
    <div className="bg-primary p-6 grid grid-rows-[minmax(0,2fr),minmax(0,1fr),minmax(0,1fr)]">
      <section>
        <h2 className="text-center text-xl font-bold -mt-4">Skills</h2>
        <div className="m-4 grid gap-4">
          <Progress skill="prototyping" value="70" />
          <Progress skill="HTML & CSS" value="90" />
          <Progress skill="typescript" value="20" />
          <Progress skill="javascript" value="70" />
          <Progress skill="photoshop" value="60" />
          <Progress skill="illustrator" value="60" />
          <Progress skill="animate" value="50" />
        </div>
      </section>
      <section className="grid gap-4">
        <h2 className="text-center text-xl font-bold">References</h2>
        {charSet.map((E, I: number) => (
          <Reference key={I} name={E.name} pos={E.pos} num={E.num} />
        ))}
      </section>
    </div>
  )
}

const Reference = (props: any) => (
  <div>
    <h3 className="font-semibold">{props.name}</h3>
    <p>{props.pos}</p>
    <PhoneNumber num={props.num} />
  </div>
)

const PhoneNumber = ({ num }: { num: string }) => (
  <div className="flex gap-2">
    <Image
      src="/phone-solid.svg"
      alt="phoone-icon"
      width={dimension}
      height={dimension}
    />
    <p>{`+(63)${num}`}</p>
  </div>
)

const Progress = (props: any) => (
  <div className="relative">
    <label className="absolute pl-2 capitalize text-white">{props.skill}</label>
    <progress className="w-full h-6" value={props.value} max="100" />
  </div>
)

export default Resume
