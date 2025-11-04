import React from 'react';
import { BsCurrencyDollar } from 'react-icons/bs';
import { GoDotFill } from 'react-icons/go';

import { Stacked, Pie, Button, SparkLine } from '../components';
import { earningData, SparklineAreaData, ecomPieChartData } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';

const Ecommerce = () => {
  const { currentColor } = useStateContext() || {};
  const safeColor = currentColor || '#3b82f6';

  return (
    <div className="mt-12">
      {/* Top banner */}
      <div className="flex flex-wrap lg:flex-nowrap justify-center">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center">
          <div className="flex justify-between items-center">
            <div>
              <p className="font-bold text-gray-400">Earnings</p>
              <p className="text-2xl">$63,448.78</p>
            </div>

            <button
              type="button"
              style={{ backgroundColor: safeColor }}
              className="text-white text-2xl opacity-90 rounded-full p-4 hover:drop-shadow-xl"
            >
              <BsCurrencyDollar />
            </button>
          </div>

          <div className="mt-6">
            <Button color="white" bgColor={safeColor} text="Download" borderRadius="10px" size="md" />
          </div>
        </div>

        {/* Earning small cards */}
        <div className="flex m-3 flex-wrap justify-center gap-4 items-center">
          {Array.isArray(earningData) && earningData.map((item) => (
            <div key={item.title} className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56 p-4 pt-9 rounded-2xl">
              <button
                type="button"
                style={{ color: item.iconColor, backgroundColor: item.iconBg }}
                className="text-2xl opacity-90 rounded-full p-4 hover:drop-shadow-xl"
              >
                {item.icon}
              </button>

              <p className="mt-3">
                <span className="text-lg font-semibold">{item.amount}</span>
                <span className={`text-sm ml-2 ${item.pcColor}`}>{item.percentage}</span>
              </p>

              <p className="text-sm text-gray-400 mt-1">{item.title}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Revenue Updates */}
      <div className="flex gap-10 flex-wrap justify-center">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 pt-9 rounded-2xl md:w-780">
          <div className="flex justify-between items-center gap-2">
            <p className="font-semibold">Revenue Updates</p>
            <div className="flex items-center gap-4">
              <p className="flex items-center gap-2 text-gray-600 hover:drop-shadow-xl">
                <GoDotFill />
                <span>Expense</span>
              </p>
              <p className="flex items-center gap-2 text-green-400 hover:drop-shadow-xl">
                <GoDotFill className="text-green-400" />
                <span>Budget</span>
              </p>
            </div>
          </div>

          <div className="mt-6">
            <SparkLine
              currentColor={safeColor}
              id="line-sparkline"
              type="Line"
              height="80px"
              width="250px"
              data={SparklineAreaData}
              color={safeColor}
            />
          </div>
        </div>

        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 pt-9 rounded-2xl w-96">
          <p className="font-semibold text-xl">Earnings</p>
          <div className="mt-4">
            <p className="text-3xl font-semibold">$63,448</p>
            <p className="text-gray-400">Monthly revenue</p>
          </div>
          <div className="mt-6">
            <Pie id="pie-chart" data={ecomPieChartData} legendVisiblity height="160px" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ecommerce;
