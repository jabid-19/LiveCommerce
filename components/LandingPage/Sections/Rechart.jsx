import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'

const data = [
  {
    month: 'Mar',
    investment: 100000,
    sell: 241,
    revenue: 10401,
  },
  {
    month: 'Apr',
    investment: 200000,
    sell: 423,
    revenue: 24500,
  },
  {
    month: 'May',
    investment: 500000,
    sell: 726,
    revenue: 67010,
  },
  {
    month: 'Jun',
    investment: 500000,
    sell: 529,
    revenue: 40405,
  },
  {
    month: 'Jul',
    investment: 600000,
    sell: 601,
    revenue: 50900,
  },
  {
    month: 'Aug',
    investment: 700000,
    sell: 670,
    revenue: 61000,
  },
]

const Rechart = () => {
  return (
    <div className="container mx-auto my-2 lg:mt-28">
      <h3 className="text-3xl lg:text-4xl font-bold py-8">Investment VS Revenue Chart</h3>
      <div data-aos="fade-up">
        <h1 className="text-sky-400/100 font-bold">Investment vs Revenue</h1>

        {/*Drawing Chart */}
        <ResponsiveContainer width="100%" height={400}>
          <BarChart
            className="mx-auto"
            data={data}
            margin={{
              top: 50,
              bottom: 50,
            }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="investment" stackId="a" fill="#8884d8" />
            <Bar dataKey="revenue" stackId="a" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default Rechart
