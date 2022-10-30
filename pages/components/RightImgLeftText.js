import React from "react";

const RightImgLeftText = (props) => {
  return (
    <div>
      <section className="text-gray-600 body-font overflow-hidden dark:bg-gray-700 dark:text-gray-200">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-11/12 mx-auto flex flex-wrap">
            <div className="lg:w-2/3 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-4 dark:text-gray-50">
                {props.heading}
              </h1>
              <p className="leading-relaxed mb-4 text-justify text-md">
                {props.para}
              </p>
            </div>
            <img
              alt="ecommerce"
              className="lg:w-1/3 w-full lg:h-auto object-center rounded-xl shadow-lg dark:shadow-blue-300"
              src={props.img}
            />
          </div>
        </div>
      </section>

    </div>
  );
};

export default RightImgLeftText;
