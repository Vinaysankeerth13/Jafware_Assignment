import React from 'react';

const ProgressBar = ({ value }) => {
  // Adjusting value for percentage (assuming max is 100%)
  const percentage = Math.min((value / 1200) * 100, 100); // Ensure it does not exceed 100%

  return (
    <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
      <div
        className="bg-orange h-4 rounded-full"
        style={{ width: `${percentage}%` }}
      ></div>
      <div className="text-center text-sm mt-2">{percentage.toFixed(2)}%</div>
    </div>
  );
};

const BarChart = ({ data, categories }) => {
  const maxValue = Math.max(...data); // Find the maximum value for scaling
  const chartHeight = 100; // Height of the chart in pixels
  const barWidth = 30; // Width of each bar in pixels

  return (
    <div className="relative w-full h-full p-4">
      {/* Y-axis */}
      <div className=" text-black absolute left-0 top-0 bottom-0 flex flex-col justify-between items-end pr-2">
        {/* Y-axis labels (adjust the range according to your data) */}
        <div className="text-xs">100</div>
        <div className="text-xs">75</div>
        <div className="text-xs">50</div>
        <div className="text-xs">25</div>
        <div className="text-xs">0</div>
      </div>

      {/* Bar Chart */}
      <div className="flex items-end justify-around h-full w-full pl-8">
        {/* Iterate over the data and categories to create bars */}
        {data.map((value, index) => {
          // Calculate the height of each bar as a percentage of the max value
          const barHeight = (value / maxValue) * chartHeight;

          return (
            <div key={index} className="flex flex-col items-center">
              <div
                className="bg-orange"
                style={{
                  height: `${barHeight}px`,
                  width: `${barWidth}px`,
                  marginBottom: '4px',
                }}
              ></div>
            </div>
          );
        })}
      </div>

      {/* X-axis */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-around pl-8">
        {categories.map((category, index) => (
          <div key={index} className="text-black text-xs text-center">
            {category}
          </div>
        ))}
      </div>
    </div>
  );
};

const DonutChart = ({ value }) => {
    const radius = 50; // Radius of the chart
    const circumference = 2 * Math.PI * radius; // Full circle circumference
    const offset = circumference - (value / 100) * circumference; // Offset for the filled part
  
    return (
      <svg width="120" height="120" className="mx-auto">
        {/* Background circle for the entire donut */}
        <circle
          cx="60"
          cy="60"
          r={radius}
          stroke="gray"
          strokeWidth="10"
          fill="none"
        />
        {/* Foreground circle to represent the progress */}
        <circle
          cx="60"
          cy="60"
          r={radius}
          className="stroke-orange"
          strokeWidth="10"
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          transform="rotate(-90 60 60)" // Rotates the circle to start at the top
        />
        {/* Display percentage in the middle of the donut */}
        <text
          x="60"
          y="60"
          textAnchor="middle"
          dy=".3em"
          fontSize="18"
          fill="black"
          fontWeight="bold"
        >
          {value}%
        </text>
      </svg>
    );
  };

const PieChart = ({ value }) => {
  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (value / 100) * circumference;

  return (
    <div className="flex flex-col items-center">
      <svg width="120" height="120" className="mx-auto">
        {/* Background circle to represent the full pie chart */}
        <circle
          cx="60"
          cy="60"
          r={radius}
          stroke="gray"
          strokeWidth="20"
          fill="none"
        />
        {/* Foreground circle to represent the pie slice */}
        <circle
          cx="60"
          cy="60"
          r={radius}
          className="stroke-orange"
          strokeWidth="20"
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          transform="rotate(-90 60 60)"
        />
      </svg>
      {/* Displaying percentage below the pie chart */}
      <div className="text-center text-sm mt-2">{value}%</div>
    </div>
  );
};

// A function to display summary data
const Summary = ({ value }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="text-2xl font-bold">{value}</div>
      {/* Additional description or summary text */}
      <div className="text-sm text-gray-500">Users</div>
    </div>
  );
};

const Widget = ({ title, value, type, data, categories }) => {
    // Render visualization based on the type
    const renderVisualization = () => {
      switch (type) {
        case 'progress':
          return <ProgressBar value={value} />;
        case 'donut':
          return <DonutChart value={value} />;
        case 'pie':
          return <PieChart value={value} />;
        case 'summary':
          return <Summary value={value} />;
        case 'bar':
          return <BarChart data={data} categories={categories} />;
        default:
          return null;
      }
    };
  
    return (
      <div className="bg-white shadow rounded-lg p-4">
        <h2 className="text-black font-bold text-lg mb-2">{title}</h2>
        <div className="h-32 flex items-center justify-center">
          {renderVisualization()}
        </div>
      </div>
    );
  };
  
export default Widget;
