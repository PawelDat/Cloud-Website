import React from "react";
import { CheckIcon } from "@heroicons/react/outline";

const SupportDetails = () => {
  return (
    <div name="platforms" className="w-full my-32">
      <div className="max-w-[1240px] mx-auto px-2">
        <h2 className="text-5xl font-bold text-center">All In One Platform</h2>
        <p className="text-2xl py-8 text-gray-500 text-center">
          Deploy highly available and scalable applications in minutes
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
          <div className="flex">
            <div>
              <CheckIcon className="w-7 mr-4 text-green-600" />
            </div>
            <div>
              <p className="text-lg pt-2 pb-4">
                Autoscaling of your cloud environment to optimize costs and
                improve performance
              </p>
            </div>
          </div>
          <div className="flex">
            <div>
              <CheckIcon className="w-7 mr-4 text-green-600" />
            </div>
            <div>
              <p className="text-lg pt-2 pb-4">
                Integrated health monitoring and load balancing with dashboards
                and real-time alerts
              </p>
            </div>
          </div>
          <div className="flex">
            <div>
              <CheckIcon className="w-7 mr-4 text-green-600" />
            </div>
            <div>
              <p className="text-lg pt-2 pb-4">
                Excellent development experience
              </p>
            </div>
          </div>
          <div className="flex">
            <div>
              <CheckIcon className="w-7 mr-4 text-green-600" />
            </div>
            <div>
              <p className="text-lg pt-2 pb-4">
                Highly available and massively scalable platform for your
                applications and APIs. Accelerated application deployment
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportDetails;
