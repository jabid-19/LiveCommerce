const Stats = () => {
  return (
    <div className="grid grid-cols-1 divide-black md:grid-cols-2 divide-y md:divide-y-0 md:divide-x text-black bg-secondary">
      <div data-aos="fade-right" data-aos-anchor-placement="top-bottom" className="text-center p-8">
        <h1 className="text-6xl font-extrabold leading-10 md:leading-[4rem] lg:leading-[4.5rem]">
          2M+
        </h1>
        <br />
        <p className="text-2xl">Broadcasts delivered monthly</p>
      </div>
      <div data-aos="fade-left" data-aos-anchor-placement="top-bottom" className="text-center p-8">
        <h1 className="text-6xl font-extrabold leading-10 md:leading-[4rem] lg:leading-[4.5rem]">
          150M+
        </h1>
        <br />
        <p className="text-2xl">Monthly viewers engagement</p>
      </div>
    </div>
  )
}

export default Stats
