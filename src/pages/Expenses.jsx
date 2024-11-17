import React, { useEffect, useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { FaPlayCircle } from "react-icons/fa";
import { IoCartOutline, IoHome } from "react-icons/io5";
import { MdDirectionsBus } from "react-icons/md";
import { RiDrinks2Fill } from "react-icons/ri";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
  }, []);
  
  const barHeights = [
    35, 52, 44, 27, 35, 30, 44, 27, 35, 52, 44, 27, 35, 30, 44, 27, 35, 52, 44,
    27, 35, 60, 44,
  ];

  const data = [
    { category: "Food and Drinks", value: 872400, maxValue: 1500000 },
    { category: "Shopping", value: 1378200, maxValue: 1500000 },
    { category: "Housing", value: 928500, maxValue: 1500000 },
    { category: "Transportation", value: 420700, maxValue: 1500000 },
    { category: "Vehicle", value: 520000, maxValue: 1500000 },
  ];

  const ProgressBar = ({ value, maxValue }) => {
    const percentage = (value / maxValue) * 100;
    return (
      <div className="w-full bg-gray-300 rounded-full h-[5px]">
        <div
          className="bg-green-500 h-[5px] rounded-full"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    );
  };

  return (
    <div className=" grid grid-cols-3">
      <div className="p1 col-span-2 ">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="g text-black font-Poppins font-semibold text-[40px]">
              Expenses
            </h2>
            <span className=" mt-[10px] text-gray-400">
              {currentTime.toLocaleDateString()}
            </span>
          </div>
          <div>
            <img src="/users.png" alt="" />
          </div>
        </div>
        <div className="flex items-end space-x-[6px]">
          {barHeights.map((height, index) => (
            <div
              key={index}
              className={`w-4 mt-[46px] h-${height} bg-blue-300 ${
                index === 21 ? "bg-blue-800" : ""
              }`}
              style={{ height: `${height}px` }}
            ></div>
          ))}
        </div>

        <div className=" mt-[47px] flex justify-between items-center pb-3 border-b border-gray-300">
          <h2 className=" font-Poppins font-semibold text-[18px]">Today</h2>
          <BsThreeDots className=" text-xl text-gray-400" />
        </div>

        <div>
          <div className=" mt-[25px] flex justify-between items-center">
            <div className=" flex  gap-4 items-center">
              <div className=" h-[48px] w-[48px] bg-[#32A7E2] center rounded-full text-white text-2xl">
                <IoCartOutline />
              </div>
              <div>
                <h2 className=" font-Poppins font-medium">Grocery</h2>
                <p className=" font-Poppins text-[14px] text-gray-400">
                  5:12 pm • Belanja di pasar
                </p>
              </div>
            </div>
            <div>
              <span className=" font-Poppins font-semibold"> -326.800</span>
            </div>
          </div>
          {/*  */}
          <div className=" mt-[25px] flex justify-between items-center">
            <div className=" flex  gap-4 items-center">
              <div className=" h-[48px] w-[48px] bg-[#B548C6] center rounded-full text-white text-2xl">
                <MdDirectionsBus />
              </div>
              <div>
                <h2 className=" font-Poppins font-medium">Transportation</h2>
                <p className=" font-Poppins text-[14px] text-gray-400">
                  5:12 pm • Naik bus umum
                </p>
              </div>
            </div>
            <div>
              <span className=" font-Poppins font-semibold">-15.000</span>
            </div>
          </div>
          {/*  */}
          <div className=" mt-[25px] flex justify-between items-center">
            <div className=" flex  gap-4 items-center">
              <div className=" h-[48px] w-[48px] bg-[#FF8700] center rounded-full text-white text-2xl">
                <IoHome />
              </div>
              <div>
                <h2 className=" font-Poppins font-medium">Housing</h2>
                <p className=" font-Poppins text-[14px] text-gray-400">
                  5:12 pm • Bayar Listrik
                </p>
              </div>
            </div>
            <div>
              <span className=" font-Poppins font-semibold">-185.750</span>
            </div>
          </div>
        </div>

        <div>
          <div className=" mt-[47px] flex justify-between items-center pb-3 border-b border-gray-300">
            <h2 className=" font-Poppins font-semibold text-[18px]">
              Monday, 23 March 2020
            </h2>
            <BsThreeDots className=" text-xl text-gray-400" />
          </div>
          {/*  */}
          <div className=" mt-[25px] flex justify-between items-center">
            <div className=" flex  gap-4 items-center">
              <div className=" h-[48px] w-[48px] bg-[#DC3434] center rounded-full text-white text-2xl">
                <RiDrinks2Fill />{" "}
              </div>
              <div>
                <h2 className=" font-Poppins font-medium">Food and Drink</h2>
                <p className=" font-Poppins text-[14px] text-gray-400">
                  5:12 pm • Makan Steak
                </p>
              </div>
            </div>
            <div>
              <span className=" font-Poppins font-semibold"> -156.000</span>
            </div>
          </div>
          {/*  */}
          <div className=" mt-[25px] flex justify-between items-center">
            <div className=" flex  gap-4 items-center">
              <div className=" h-[48px] w-[48px] bg-[#4BA83D] center rounded-full text-white text-2xl">
                <FaPlayCircle className=" text-white" />{" "}
              </div>
              <div>
                <h2 className=" font-Poppins font-medium">Entertainment</h2>
                <p className=" font-Poppins text-[14px] text-gray-400">
                  5:12 pm • Nonton Bioskop
                </p>
              </div>
            </div>
            <div>
              <span className=" font-Poppins font-semibold"> -35.200</span>
            </div>
          </div>
          {/*  */}
        </div>
      </div>

      <div className="p2 bg-[#979797] bg-opacity-5">
        <h2 className=" font-Poppins font-semibold text-[20px]">
          Where your money go?
        </h2>

        <div className="space-y-4">
          {data.map((item, index) => (
            <div>
              <div key={index} className="flex mt-[30px] gap-y-[] flex-col">
                <div className="flex justify-between mb-1 text-sm font-medium text-gray-900">
                  <span>{item.category}</span>
                  <span>{item.value.toLocaleString()}</span>
                </div>
                <ProgressBar value={item.value} maxValue={item.maxValue} />
              </div>
            </div>
          ))}
        </div>

        <div>
          <div className=" bg-slate-300 bg-opacity-30 relative mt-[101px] rounded-2xl p-[25px]">
            <img
              className=" h-[72px] pl-[25px] absolute top-[-18px] left-0"
              src="/drawer.png"
              alt=""
            />
            <img
              className=" h-[90px] pr-[25px] absolute top-[-35px] right-0"
              src="/tree.png"
              alt=""
            />
            <h2 className="font-Poppins font-semibold text-black mt-[77px]">
              Save more money
            </h2>
            <p className=" font-Poppins text-[12px] mt-1 text-gray-500">eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.</p>
            <button className=" w-full py-[13px] bg-black text-white font-Poppins font-semibold mt-4 rounded-lg uppercase"><Link>view tips</Link></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
