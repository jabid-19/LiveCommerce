const Stats = () => {
  return (
    <div className="grid grid-cols-1 divide-black md:grid-cols-2 divide-y md:divide-y-0 md:divide-x text-black bg-secondary">
      <div data-aos="fade-right" data-aos-anchor-placement="top-bottom" className="text-center p-8">
        <h1 className="text-7xl font-extrabold">8M+</h1>
        <br />
        <p className="text-2xl">broadcasts delivered monthly</p>
      </div>
      <div data-aos="fade-left" data-aos-anchor-placement="top-bottom" className="text-center p-8">
        <h1 className="text-7xl font-extrabold">600M+</h1>
        <br />
        <p className="text-2xl">viewers engaged monthly</p>
      </div>
    </div>
  )
}

export default Stats
