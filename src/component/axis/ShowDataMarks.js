import '../histogram/Histogram.css'

export const ShowDataMarks = ({ data, yScale, xScale }) =>
  data.map((d) => (
    <rect className="showMarks"
      key={d.month}
      x={0}
      y={yScale(d.month)}
      width={xScale(d.number)}
      height={yScale.bandwidth()}
    >
        <title>{d.number}</title>
      </rect>
  ));
