import { useState } from 'react';
import ReactECharts from 'echarts-for-react';
import { motion } from 'framer-motion';
import { format } from 'date-fns';

function Progress() {
  const [selectedMetric, setSelectedMetric] = useState('weight');

  const getChartOptions = () => {
    const dates = Array.from({ length: 7 }, (_, i) => {
      const date = new Date();
      date.setDate(date.getDate() - i);
      return format(date, 'MMM dd');
    }).reverse();

    const data = {
      weight: [80, 79.5, 79.2, 78.8, 78.5, 78.2, 78],
      workouts: [1, 0, 1, 1, 0, 1, 1],
      calories: [2200, 2100, 2300, 2150, 2000, 2250, 2100]
    };

    return {
      tooltip: {
        trigger: 'axis'
      },
      xAxis: {
        type: 'category',
        data: dates
      },
      yAxis: {
        type: 'value',
        name: selectedMetric.charAt(0).toUpperCase() + selectedMetric.slice(1)
      },
      series: [{
        data: data[selectedMetric],
        type: 'line',
        smooth: true,
        lineStyle: {
          color: '#3B82F6'
        },
        itemStyle: {
          color: '#3B82F6'
        }
      }]
    };
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Progress Tracking</h1>

        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <div className="flex space-x-4 mb-6">
            {['weight', 'workouts', 'calories'].map(metric => (
              <button
                key={metric}
                onClick={() => setSelectedMetric(metric)}
                className={`px-4 py-2 rounded-full ${
                  selectedMetric === metric
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {metric.charAt(0).toUpperCase() + metric.slice(1)}
              </button>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <ReactECharts 
              option={getChartOptions()} 
              style={{ height: '400px' }}
            />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold mb-2">Current Weight</h3>
            <p className="text-3xl font-bold text-blue-600">78 kg</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold mb-2">Weekly Workouts</h3>
            <p className="text-3xl font-bold text-blue-600">5</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold mb-2">Avg. Daily Calories</h3>
            <p className="text-3xl font-bold text-blue-600">2,150</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Progress;