

export const AxisBottom = ({ xScale, innerHeight }) =>
  xScale.ticks().map((tickValue) => (
    <g key={tickValue} transform={`translate(${xScale(tickValue)},0)`}>
      <line y2={innerHeight} />
      <text dy='1rem' y={innerHeight + 0.5} style={{ textAnchor: 'middle' }}>
        {tickValue}{' '}
      </text>
    </g>
  ));
