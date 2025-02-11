import { useState } from 'react';
import { motion } from 'framer-motion';

const mealPlans = [
  {
    id: 1,
    title: "Weight Loss Plan",
    calories: 1500,
    meals: [
      { name: "Breakfast", description: "Oatmeal with berries and nuts" },
      { name: "Lunch", description: "Grilled chicken salad" },
      { name: "Dinner", description: "Baked salmon with vegetables" }
    ]
  },
  {
    id: 2,
    title: "Muscle Gain Plan",
    calories: 2500,
    meals: [
      { name: "Breakfast", description: "Protein smoothie with banana" },
      { name: "Lunch", description: "Turkey and quinoa bowl" },
      { name: "Dinner", description: "Lean beef with sweet potato" }
    ]
  }
];

function Nutrition() {
  const [selectedPlan, setSelectedPlan] = useState(null);

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Nutrition Plans</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {mealPlans.map((plan) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-lg shadow-lg p-6"
            >
              <h2 className="text-2xl font-bold mb-4">{plan.title}</h2>
              <p className="text-gray-600 mb-4">{plan.calories} calories/day</p>
              
              <button
                onClick={() => setSelectedPlan(plan.id)}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
              >
                View Details
              </button>

              {selectedPlan === plan.id && (
                <div className="mt-6 space-y-4">
                  {plan.meals.map((meal, index) => (
                    <div key={index} className="border-t pt-4">
                      <h3 className="font-bold">{meal.name}</h3>
                      <p className="text-gray-600">{meal.description}</p>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <div className="mt-12 bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-6">Nutrition Tips</h2>
          <ul className="space-y-4">
            <li className="flex items-center">
              <span className="w-4 h-4 bg-blue-600 rounded-full mr-3"></span>
              Stay hydrated by drinking at least 8 glasses of water daily
            </li>
            <li className="flex items-center">
              <span className="w-4 h-4 bg-blue-600 rounded-full mr-3"></span>
              Eat plenty of fruits and vegetables
            </li>
            <li className="flex items-center">
              <span className="w-4 h-4 bg-blue-600 rounded-full mr-3"></span>
              Include protein with every meal
            </li>
            <li className="flex items-center">
              <span className="w-4 h-4 bg-blue-600 rounded-full mr-3"></span>
              Limit processed foods and added sugars
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Nutrition;