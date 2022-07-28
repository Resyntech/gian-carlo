import { useAppSelector } from "../src/redux/hooks"
import Image from "next/image"

const dimension = 14
const Resume = () => {
  const resume = useAppSelector((state) => state.resume)
  const { name, email, num, address } = resume.info
  return (
    <section className="h-screen">
      <Header name={name} email={email} num={num} address={address} />
      <div className="grid grid-cols-[minmax(0,2fr),minmax(0,1fr)] ">
        <Experiences />
        <Personal />
      </div>
    </section>
  )
}

const Header = (props: any) => {
  return (
    <header className="bg-resume-secondary text-white p-4">
      <div>
        <h1 className="text-3xl font-bold paragraph">{props.name}</h1>
        <PhoneNumber num={props.num} />
        <div className="flex gap-2">
          <Image
            src="/envelope-solid.svg"
            alt="envelope-icon"
            width={dimension}
            height={dimension}
          />
          <p className="paragraph">{props.email}</p>
        </div>
        <div className="flex gap-2">
          <Image
            src="/location-dot-solid.svg"
            alt="location-icon"
            width={dimension}
            height={dimension}
          />
          <p className="paragraph">{props.address}</p>
        </div>
      </div>
      <div className="absolute top-4 right-6">
        <Image
          src="/avatar.jpg"
          alt="profile-picture"
          width={dimension * 6}
          height={dimension * 6}
        />
      </div>
    </header>
  )
}

const Experiences = () => {
  const main = useAppSelector((state) => state.resume.main)
  return (
    <div className="bg-resume-paper">
      {main.map(({ title, info }, I: number) => (
        <section key={I}>
          <div className="flex gap-2 m-6">
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
            <h1 className="text-xl font-bold paragraph">{title}</h1>
          </div>
          {info.map(({ desc, location, date }, index: number) => (
            <div key={index} className="m-8">
              {location && <p className="font-bold paragraph">{location}</p>}
              {desc && <p className="font-semibold paragraph">{desc}</p>}
              {date && <p className="paragraph">{date}</p>}
            </div>
          ))}
        </section>
      ))}
    </div>
  )
}
const Personal = () => {
  const charSet = useAppSelector((state) => state.resume.charRef)
  const skills = useAppSelector((state) => state.resume.skills)
  return (
    <div className="bg-resume-primary p-6 grid grid-rows-[minmax(0,2fr),minmax(0,1fr),minmax(0,1fr)]">
      <section>
        <h2 className="sm:text-center text-xl font-bold -mt-4">Skills</h2>
        <div className="sm:m-4 -ml-4 sm:ml-0 grid gap-4">
          {skills.map(({ name, progress }, I: number) => (
            <Progress key={I} skill={name} height={20} progress={progress} />
          ))}
        </div>
      </section>
      <section className="grid gap-4">
        <h2 className="sm:text-center sm:text-xl font-bold paragraph">
          References
        </h2>
        {charSet.map((E, I: number) => (
          <Reference key={I} name={E.name} pos={E.pos} num={E.num} />
        ))}
      </section>
    </div>
  )
}

const Reference = (props: any) => (
  <div>
    <h3 className="font-semibold paragraph">{props.name}</h3>
    <p className="paragraph">{props.pos}</p>
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
    <p className="paragraph">{`0${num}`}</p>
  </div>
)

const Progress = ({
  progress,
  height,
  skill,
}: {
  progress: number | string
  height: number
  skill?: string
}) => (
  <div style={{ height }} className="w-full bg-resume-paper rounded-lg">
    <div
      style={{ width: `${progress}%` }}
      className="h-full rounded-lg bg-resume-fill text-right"
    >
      <span className="m-2 text-black text-xs font-semibold capitalize">{`${skill}`}</span>
    </div>
  </div>
)

export default Resume
