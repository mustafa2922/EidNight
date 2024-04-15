import React, { useState } from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CloseIcon from "@mui/icons-material/Close";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CheckIcon from "@mui/icons-material/Check";
import AddIcon from "@mui/icons-material/Add";
import "./Home.css";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let dates = [];

function Home() {
  dates = [];

  const [val, setVal] = useState(0);

  const currentDate = new Date();
  const currentMonthIndex = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();

  const daysInMonth = new Date(currentYear, currentMonthIndex + 1, 0).getDate();

  for (let i = 1; i <= daysInMonth; i++) {
    const date = new Date(currentYear, currentMonthIndex, i);
    const dayName = days[date.getDay()];
    dates.push({ date: date.getDate(), dayName: dayName });
  }

  return (
    <div className="flex flex-row px-2  w-full  h-fit bg-[#e8f5ff]">
      <div className="w-[10%]  bg-white "></div>

      <div className="flex flex-row justify-between  w-[90%] px-3 py-2 border bg-[#e8f5ff]">
        <div className="w-[40%] flex flex-col  bg-[#e8f5ff]">
          <div className="h-fit rounded-lg p-3 bg-white w-full ">
            <div className="text-[#0174CF] text-lg font-bold     ">
              Hello, Darrell Steward
            </div>
            <div className="text-sm text-[#0174CF]">
              Below you can find the patient details of Courtney Henry
            </div>
          </div>

          <div className="w-full mt-3 flex flex-row justify-between  h-fit">
            <div className="w-[48%] bg-white rounded-lg p-3">
              <div>
                <span className="text-xl text-slate-700 ">Vital Monitring</span>
                <hr />
              </div>
              <div className="flex w-full">
                <div className="w-[80%]">
                  <div className="h-12 mt-2">
                    <span className="text-[#0174CF] text-5xl font-[600]">
                      57
                    </span>
                    <span className="text-slate-500">
                      %SpO<sub>2</sub>
                    </span>
                  </div>

                  <div className="mt-2 h-12">
                    <span className="text-[#0174CF] text-5xl font-[600]">
                      85
                    </span>
                    <span className="text-slate-500">
                      PRb<span className="text-xs">Pm</span>
                    </span>
                  </div>

                  <div className="mt-3">
                    <div className="text-slate-500 text-sm">
                      Last monitored:
                    </div>
                    <div className="font-bold text-sm">60 mins ago</div>
                  </div>
                </div>
                <div className=" flex flex-col items-center pt-4 w-[20%]">
                  <FavoriteIcon
                    className="text-[#EAD831] "
                    style={{ fontSize: 20 }}
                  />
                  <div className="flex flex-col w-[25px]">
                    {[...Array(35).keys()].map((item, index) => {
                      return (
                        <div
                          style={{ marginTop: 1 }}
                          className={`rounded-3xl ${
                            index > 25 ? "bg-[#EAD831]" : "bg-slate-400"
                          }  h-[3px] !w-[25px]}`}
                        >
                          {" "}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            <div className="w-[48%] bg-white rounded-lg p-3">
              <div>
                <span className="text-xl text-slate-700 ">Air Bubble</span>
                <hr />
              </div>
              <div className="flex justify-between">
                <div className="w-[50%] ">
                  <div className="mt-4 h-24">
                    <div className="text-[#0174CF] text-xl font-[600]">
                      No <br /> Issues <br /> Till now{" "}
                    </div>
                  </div>

                  <div className="mt-3">
                    <div className="text-slate-500 text-sm">
                      Last monitored:{" "}
                    </div>
                    <div className="font-bold text-sm">10 sec ago</div>
                  </div>
                </div>
                <div className=" flex flex-col  pt-4 w-[50%]">
                  <div className="flex w-full justify-end">
                    <div className="flex flex-col">
                      <div className="flex flex-col">
                        <span className="text-slate-400 text-xs">
                          Bubble Limit
                        </span>
                        <hr className="w-[80%] mb-[2px] border-slate-400   rounded-xl self-end" />
                      </div>

                      <div className="flex flex-col self-end ">
                        {[...Array(35).keys()].map((item, index) => {
                          return (
                            <div
                              style={{ marginTop: 1 }}
                              className={`rounded-3xl ${
                                index > 25 ? "bg-[#EAD831]" : "bg-slate-400"
                              }  h-[3px] w-[25px]  }`}
                            ></div>
                          );
                        })}
                      </div>
                    </div>

                    <div
                      className="text-xs text-slate-400 mt-[30%]"
                      style={{ writingMode: "vertical-lr" }}
                    >
                      {" "}
                      Length of air column{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full mt-3 flex flex-row justify-between  h-fit">
            <div className="w-[48%] bg-white rounded-lg  p-2">
              <div>
                <span className="text-lg text-slate-700">Recent Files</span>
                <hr className="mt-1" />
              </div>

              <div className="h-64 overflow-y-scroll">
                <div>
                  <div className="mt-3 flex justify-between items-center border border-slate-500 rounded-md w-full p-1">
                    <div className="w-fit text-[0.8rem]"> Blood Reports </div>
                    <div className="w-fit">
                      <div className="text-[0.7rem]">12 Nov 2023</div>
                      <div className="mt-[-5px] text-[0.65rem] text-slate-500 font-[600] text-end">
                        {" "}
                        48 Mb{" "}
                      </div>
                    </div>
                  </div>

                  <div className="mt-3 flex justify-between items-center border border-slate-500 rounded-md w-full  p-1">
                    <div className="w-fit text-[0.8rem]"> Blood Reports </div>
                    <div className="w-fit">
                      <div className="text-[0.7rem]">12 Nov 2023</div>
                      <div className="mt-[-5px] text-[0.65rem] text-slate-500 font-[600] text-end">
                        {" "}
                        48 Mb{" "}
                      </div>
                    </div>
                  </div>

                  <div className="mt-3 flex justify-between items-center border border-slate-500 rounded-md w-full p-1">
                    <div className="w-fit text-[0.8rem]"> Blood Reports </div>
                    <div className="w-fit">
                      <div className="text-[0.7rem]">12 Nov 2023</div>
                      <div className="mt-[-5px] text-[0.65rem] text-slate-500 font-[600] text-end">
                        {" "}
                        48 Mb{" "}
                      </div>
                    </div>
                  </div>

                  <div className="mt-3 flex justify-between items-center border border-slate-500 rounded-md w-full  p-1">
                    <div className="w-fit text-[0.8rem]"> Blood Reports </div>
                    <div className="w-fit">
                      <div className="text-[0.7rem]">12 Nov 2023</div>
                      <div className="mt-[-5px] text-[0.65rem] text-slate-500 font-[600] text-end">
                        {" "}
                        48 Mb{" "}
                      </div>
                    </div>
                  </div>

                  <div className="mt-3 flex justify-between items-center border border-slate-500 rounded-md w-full  p-1">
                    <div className="w-fit text-[0.8rem]"> Blood Reports </div>
                    <div className="w-fit">
                      <div className="text-[0.7rem]">12 Nov 2023</div>
                      <div className="mt-[-5px] text-[0.65rem] text-slate-500 font-[600] text-end">
                        {" "}
                        48 Mb{" "}
                      </div>
                    </div>
                  </div>

                  <div className="mt-3 flex justify-between items-center border border-slate-500 rounded-md w-full  p-1">
                    <div className="w-fit text-[0.8rem]"> Blood Reports </div>
                    <div className="w-fit">
                      <div className="text-[0.7rem]">12 Nov 2023</div>
                      <div className="mt-[-5px] text-[0.65rem] text-slate-500 font-[600] text-end">
                        {" "}
                        48 Mb{" "}
                      </div>
                    </div>
                  </div>

                  <div className="mt-3 flex justify-between items-center border border-slate-500 rounded-md w-full p-1">
                    <div className="w-fit text-[0.8rem]"> Blood Reports </div>
                    <div className="w-fit">
                      <div className="text-[0.7rem]">12 Nov 2023</div>
                      <div className="mt-[-5px] text-[0.65rem] text-slate-500 font-[600] text-end">
                        {" "}
                        48 Mb{" "}
                      </div>
                    </div>
                  </div>

                  <div className="mt-3 flex justify-between items-center border border-slate-500 rounded-md w-full p-1">
                    <div className="w-fit text-[0.8rem]"> Blood Reports </div>
                    <div className="w-fit">
                      <div className="text-[0.7rem]">12 Nov 2023</div>
                      <div className="mt-[-5px] text-[0.65rem] text-slate-500 font-[600] text-end">
                        {" "}
                        48 Mb{" "}
                      </div>
                    </div>
                  </div>

                  <div className="mt-3 flex justify-between items-center border border-slate-500 rounded-md w-full  p-1">
                    <div className="w-fit text-[0.8rem]"> Blood Reports </div>
                    <div className="w-fit">
                      <div className="text-[0.7rem]">12 Nov 2023</div>
                      <div className="mt-[-5px] text-[0.65rem] text-slate-500 font-[600] text-end">
                        {" "}
                        48 Mb{" "}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-[48%] bg-white rounded-lg p-2">
              <div>
                <span className="text-lg text-slate-700">Check Ups</span>
                <hr className="mt-1" />
              </div>

              <div className="overflow-y-auto h-[13.5rem]">
                <div>
                  <div>
                    <span className="text-[#0174CF] text-sm font-bold">
                      Oncologist, Dr Nareen Bhaat
                    </span>
                    <hr />
                  </div>

                  <div>
                    <span className=" text-sm px-1 text-red-600">
                      Immediate X ray
                    </span>
                    <hr />
                  </div>

                  <div>
                    <div className="flex flex-row px-1">
                      <p className="w-[50%] text-slate-600">anefhcbfu</p>
                      <p className="w-[20%] text-center text-slate-600">15mg</p>
                      <p className="w-[30%] text-end text-slate-600">1x1x1</p>
                    </div>
                    <hr />
                  </div>

                  <div>
                    <div className="flex flex-row px-1">
                      <p className="w-[50%] text-slate-600">anefhcbfu</p>
                      <p className="w-[20%] text-center text-slate-600">15mg</p>
                      <p className="w-[30%] text-end text-slate-600">1x1x1</p>
                    </div>
                    <hr />
                  </div>

                  <div>
                    <div className="flex flex-row px-1">
                      <p className="w-[50%] text-slate-600">anefhcbfu</p>
                      <p className="w-[20%] text-center text-slate-600">15mg</p>
                      <p className="w-[30%] text-end text-slate-600">1x1x1</p>
                    </div>
                    <hr />
                  </div>

                  <div>
                    <div className="flex flex-row px-1 h-6">
                      <p className="w-[50%] text-slate-600"></p>
                      <p className="w-[20%] text-center text-slate-600"></p>
                      <p className="w-[30%] text-end text-slate-600"></p>
                    </div>
                    <hr />
                  </div>

                  <div>
                    <span className="text-[#0174CF] text-sm font-bold">
                      Physician, Dr Nareen Bhaat
                    </span>
                    <hr />
                  </div>

                  <div>
                    <span className=" text-sm px-1 text-red-600">
                      Immediate X ray
                    </span>
                    <hr />
                  </div>

                  <div>
                    <div className="flex flex-row px-1">
                      <p className="w-[50%] text-slate-600">anefhcbfu</p>
                      <p className="w-[20%] text-center text-slate-600">15mg</p>
                      <p className="w-[30%] text-end text-slate-600">1x1x1</p>
                    </div>
                    <hr />
                  </div>

                  <div>
                    <div className="flex flex-row px-1">
                      <p className="w-[50%] text-slate-600">anefhcbfu</p>
                      <p className="w-[20%] text-center text-slate-600">15mg</p>
                      <p className="w-[30%] text-end text-slate-600">1x1x1</p>
                    </div>
                    <hr />
                  </div>

                  <div>
                    <div className="flex flex-row px-1">
                      <p className="w-[50%] text-slate-600">anefhcbfu</p>
                      <p className="w-[20%] text-center text-slate-600">15mg</p>
                      <p className="w-[30%] text-end text-slate-600">1x1x1</p>
                    </div>
                    <hr />
                  </div>

                  <div>
                    <div className="flex flex-row px-1 h-6">
                      <p className="w-[50%] text-slate-600"></p>
                      <p className="w-[20%] text-center text-slate-600"></p>
                      <p className="w-[30%] text-end text-slate-600"></p>
                    </div>
                    <hr />
                  </div>

                  <div>
                    <div className="flex flex-row px-1 h-6">
                      <p className="w-[50%] text-slate-600"></p>
                      <p className="w-[20%] text-center text-slate-600"></p>
                      <p className="w-[30%] text-end text-slate-600"></p>
                    </div>
                    <hr />
                  </div>
                </div>
              </div>

              <div className="flex flex-row justify-around items-center p-1 mt-1">
                <div className="text-xs w-5 h-5 text-slate-400 flex justify-center items-center border-slate-400 border rounded-full">
                  1
                </div>
                <div className="text-xs  w-5 h-5 text-slate-400 flex justify-center items-center border-slate-400 border rounded-full">
                  2
                </div>
                <div className="text-xs  w-5 h-5 text-slate-400 flex justify-center items-center border-slate-400 border rounded-full">
                  3
                </div>
                <div className="text-xs  w-5 h-5 text-slate-400 flex justify-center items-center border-slate-400 border rounded-full">
                  4
                </div>
                <div className="text-xs w-5 h-5 text-slate-400 flex justify-center items-center border-slate-400 border rounded-full">
                  5
                </div>
                <div className="text-xs  w-5 h-5 text-slate-400 flex justify-center items-center border-slate-400 border rounded-full">
                  6
                </div>
                <div className="text-xs  w-5 h-5 text-slate-400 flex justify-center items-center border-slate-400 border rounded-full">
                  7
                </div>
                <div className="text-xs  w-5 h-5 text-slate-400 flex justify-center items-center border-slate-400 border rounded-full">
                  8
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[40%] flex flex-col mx-3 bg-[#e8f5ff] ">
          <div className="bg-white p-2 rounded-lg">
            <div>
              <span className="text-xl text-slate-700">Drip Monitoring</span>
              <hr />
            </div>

            <div className="flex flex-row justify-between items-center">
              <div className="flex flex-col  items-start gap-2 w-[48%]">
                <div className="h-12 flex items-end gap-3 mt-2">
                  <span className="text-[#0174CF] text-5xl font-[600]">57</span>
                  <span className="text-slate-500 font-[500]">mL/h</span>
                  <span className="flex items-end">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 30 42"
                      height="21"
                      width="15"
                      class="mt-2"
                    >
                      <path
                        fill="gray"
                        d="M15 3 Q16.5 6.8 25 18 A12.8 12.8 0 1 1 5 18 Q13.5 6.8 15 3z"
                      />
                    </svg>
                    <span className="text-slate-600 text-sm" >15</span>
                  </span>
                </div>
                <div>
                  <div className="text-slate-600 mb-[-5px] text-sm font-[600]">
                    Time elapsed:{" "}
                  </div>
                  <span className="to-black font-bold">15 mins</span>
                </div>
                <div>
                  <div className="text-slate-600 text-sm  mb-[-5px] font-[600]">
                    Estimated time left:
                  </div>
                  <span className="to-black font-bold">60 mins</span>
                </div>
              </div>
              <div className="w-[60%] p-1  h-[170px]">
                <div className="border h-full flex rounded-lg">
                  <div className="w-[80%] flex items-center justify-center flex-col">
                    <div className="border-blue-200 h-16 w-[80%] border rounded-md flex items-center justify-center text-5xl text-slate-400 ">
                      {val}
                    </div>
                    <div className="flex items-end self-start px-4">
                      <svg
                        className="mt-2"
                        height="42px"
                        width="30px"
                        viewbox="0 0 30 42"
                      >
                        <path
                          fill="gray"
                          d="M15 3
           Q16.5 6.8 25 18
           A12.8 12.8 0 1 1 5 18
           Q13.5 6.8 15 3z"
                        />
                        <text
                          x="50%"
                          y="50%"
                          text-anchor="middle"
                          dy="0.5em"
                          fill="#fff"
                          className="text-base font-[500]"
                        >
                          15
                        </text>
                      </svg>
                      <span className="text-slate-400 font-[400]">gtt/mL</span>
                    </div>
                  </div>
                  <div className="w-[25%] flex items-center">
                    <div className="w-[80%] flex gap-3 flex-col items-center">
                      <button
                        onClick={() => {
                          setVal(val + 1);
                        }}
                        className=" cursor-pointer hover:bg-blue-600 w-7 h-7 flex items-center justify-center bg-blue-500 rounded-md"
                      >
                        <KeyboardArrowUpIcon style={{ color: "#fff" }} />
                      </button>
                      <div className="w-7 h-7 flex items-center justify-center text-black bg-slate-300 rounded-md">
                        95
                      </div>
                      <button
                        onClick={() => {
                          val > 0 ? setVal(val - 1) : "";
                        }}
                        className="  cursor-pointer hover:bg-blue-600 w-7 h-7 flex items-center justify-center  bg-blue-500 rounded-md"
                      >
                        <KeyboardArrowDownIcon style={{ color: "#fff" }} />
                      </button>
                    </div>

                    <input
                      type="range"
                      min={0}
                      max={100}
                      onChange={(e)=>{
                        setVal(e.target.value)
                      }}
                      className="Range-Bar w-fit "
                      style={{ writingMode: "vertical-lr" }}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className=" p-1 mt-2 border border-slate-300 rounded-md w-full">
              <div className="flex justify-between gap-1 items-center flex-row">
                <span className="text-lg text-black font-[500] flex items-center justify-center ">
                  10
                </span>
                <span className="border h-[0.1rem] w-full bg-slate-200 "></span>
                <span className="relative  flex items-center justify-center w-[100px]">
                  <svg height="40px" width="30px" viewbox="0 0 30 42">
                    <path
                      fill="blue"
                      d="M15 3
           Q16.5 6.8 25 18
           A12.8 12.8 0 1 1 5 18
           Q13.5 6.8 15 3z"
                    />
                    <text
                      x="50%"
                      y="50%"
                      text-anchor="middle"
                      dy="0.5em"
                      fill="#fff"
                      className="text-base font-[500]"
                    >
                      15
                    </text>
                  </svg>
                </span>
                <span className="border h-[0.1rem] w-full bg-slate-200  "></span>
                <span className="text-lg text-black font-[500] flex items-center justify-center ">
                  20
                </span>
                <span className="border h-[0.1rem] w-full bg-slate-200 "></span>
                <span className="text-lg text-black font-[500] flex items-center justify-center ">
                  60
                </span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-slate-500">SET</span>
                <span className="text-slate-500">gtt/mL</span>
              </div>
            </div>
          </div>

          <div className="mt-2 bg-white w-full h-fit p-2 rounded-lg">
            <div>
              <span className="text-xl text-slate-700">
                Drug Administration
              </span>
              <hr />
            </div>
            <div className="flex flex-col mt-2">
              <div className="h-fit gap-2 flex items-start">
                <div className="w-[60%]">
                  <select className="border border-blue-300 rounded-md active:outline-none focus:outline-none h-7 w-full">
                    <option>1.anefhcbfu</option>
                  </select>
                  <div className="bg-slate-300 my-1 ml-2 h-5 flex items-center rounded-xl">
                    <span className="flex items-center justify-center">
                      <PlayArrowIcon style={{ color: "gray", fontSize: 20 }} />
                    </span>
                    <span className="ml-1 text-[0.6rem] text-red-600 ">
                      The patient is allergic to the compo....
                    </span>
                  </div>
                </div>
                <div className="w-[20%]">
                  <div className="font-bold text-slate-500 border border-blue-300 rounded-md flex p-1 h-7 items-center">
                    500 ml
                  </div>
                </div>
                <div className="w-[20%] flex items-center justify-evenly h-7">
                  <div className="w-5 h-5 flex items-center justify-center bg-[#E8F5FF] rounded-md">
                    <KeyboardArrowUpIcon />
                  </div>
                  <div className="w-5 h-5 flex items-center justify-center bg-[#E8F5FF] rounded-md">
                    <KeyboardArrowDownIcon />
                  </div>
                  <div className="w-4 h-4 flex items-center justify-center rounded-full bg-red-600">
                    <CloseIcon style={{ height: 15, color: "#fff" }} />
                  </div>
                </div>
              </div>

              <div className="mt-1 h-fit gap-2 flex items-start">
                <div className="w-[60%]">
                  <select className="border border-blue-300 rounded-md active:outline-none focus:outline-none h-7 w-full">
                    <option>1.anefhcbfu</option>
                  </select>
                  <div className="bg-slate-300 my-1 ml-2 h-5 flex items-center rounded-xl">
                    <span className="flex items-center justify-center">
                      <PlayArrowIcon style={{ color: "gray", fontSize: 20 }} />
                    </span>
                    <span className="ml-1 text-[0.6rem] text-green-600 ">
                      All good ! According to the patients ..
                    </span>
                  </div>
                </div>
                <div className="w-[20%]">
                  <div className="font-bold text-slate-500 border border-blue-300 rounded-md flex p-1 h-7 items-center">
                    500 ml
                  </div>
                </div>
                <div className="w-[20%] flex items-center justify-evenly h-7">
                  <div className="w-5 h-5 flex items-center justify-center bg-[#E8F5FF] rounded-md">
                    <KeyboardArrowUpIcon />
                  </div>
                  <div className="w-5 h-5 flex items-center justify-center bg-[#E8F5FF] rounded-md">
                    <KeyboardArrowDownIcon />
                  </div>
                  <div className="w-4 h-4 flex items-center justify-center rounded-full bg-green-600">
                    <CheckIcon style={{ height: 15, color: "#fff" }} />
                  </div>
                </div>
              </div>

              <div className="mt-1 h-fit gap-2 flex items-start">
                <div className="w-[60%]">
                  <select className="border border-blue-300 rounded-md active:outline-none focus:outline-none h-7 w-full">
                    <option>1.anefhcbfu</option>
                  </select>
                  <div className="bg-slate-300 my-1 ml-2 h-5 flex items-center rounded-xl">
                    <span className="flex items-center justify-center">
                      <PlayArrowIcon style={{ color: "gray", fontSize: 20 }} />
                    </span>
                    <span className="ml-1 text-[0.6rem] text-green-600 ">
                      All good ! According to the patients ..
                    </span>
                  </div>
                </div>
                <div className="w-[20%]">
                  <div className="font-bold text-slate-500 border border-blue-300 rounded-md flex p-1 h-7 items-center">
                    500 ml
                  </div>
                </div>
                <div className="w-[20%] flex items-center justify-evenly h-7">
                  <div className="w-5 h-5 flex items-center justify-center bg-[#E8F5FF] rounded-md">
                    <KeyboardArrowUpIcon />
                  </div>
                  <div className="w-5 h-5 flex items-center justify-center bg-[#E8F5FF] rounded-md">
                    <KeyboardArrowDownIcon />
                  </div>
                  <div className="w-4 h-4 flex items-center justify-center rounded-full bg-green-600">
                    <CheckIcon style={{ height: 15, color: "#fff" }} />
                  </div>
                </div>
              </div>

              <div className="w-full flex items-center justify-end h-fit">
                <button className="flex items-center justify-center h-10 w-10 rounded-full bg-blue-700">
                  <AddIcon style={{ color: "#fff" }} />
                </button>
              </div>
            </div>
          </div>

          <div className="mt-2 bg-white w-full h-fit p-2 rounded-lg">
            <div>
              <span className="text-xl text-slate-700">Allergies</span>
              <hr />
            </div>
            <div className="flex items-center justify-between w-full p-1 mt-1">
              <div className="w-[48%] flex flex-col ">
                <div className="p-1 flex flex-row items-center justify-between">
                  <span className="text-slate-600 font-[500]">
                    {" "}
                    Penicillin Allergy{" "}
                  </span>
                  <span className="h-2 w-2 rounded-full bg-red-800"></span>
                </div>
                <hr />
                <div className="p-1 flex flex-row items-center justify-between">
                  <span className="text-slate-600 font-[500]"> NSAID </span>
                </div>
                <hr />
                <div className="p-1 flex flex-row items-center justify-between">
                  <span className="text-slate-600 font-[500]"> Shellfish </span>
                </div>
                <hr />
              </div>
              <div className="w-[48%] ">
                <div className="p-1 flex flex-row items-center justify-between">
                  <span className="text-slate-600 font-[500]">
                    {" "}
                    Sulfonamide{" "}
                  </span>
                </div>
                <hr />
                <div className="p-1 flex flex-row items-center justify-between">
                  <span className="text-slate-600 font-[500]"> Latex </span>
                  <span className="h-2 w-2 rounded-full bg-red-800"></span>
                </div>
                <hr />
                <div className="p-1 flex flex-row items-center justify-between">
                  <span className="text-slate-600 font-[500]">
                    {" "}
                    Sulfonamide{" "}
                  </span>
                </div>
                <hr />
              </div>
            </div>
          </div>
        </div>

        <div className="w-[20%] flex flex-col  bg-[#e8f5ff] ">
          <div className="flex flex-col bg-white rounded-t-2xl rounded-b-lg ">
            <div className="bg-slate-200 rounded-t-2xl rounded-b-xl pb-2">
              <div className="p-3 flex items-center justify-between bg-[#0174CF] rounded-2xl">
                <span className="text-slate-100">My Calender</span>
                <span className="w-[45%]">
                  <select
                    defaultValue={months[currentMonthIndex]}
                    className="bg-[#3490d9] px-1 focus:outline-none flex items-center text-white w-full rounded-md"
                  >
                    {months.map((item, index) => {
                      return (
                        <option key={index} value={item}>
                          {" "}
                          {item}{" "}
                        </option>
                      );
                    })}
                  </select>
                </span>
              </div>

              <div className="px-2 mt-2 h-fit overflow-x-auto flex items-center ">
                {dates.map((item, index) => {
                  return (
                    <div
                      className={`mb-2 rounded-md  px-3 cursor-pointer p-1 ${
                        currentDate.getDate() === item.date
                          ? "bg-[#0174CF]"
                          : ""
                      }`}
                    >
                      <div className="w-full text-center">
                        <span
                          className={`${
                            currentDate.getDate() === item.date
                              ? "text-white"
                              : "text-slate-600"
                          }`}
                        >
                          {item.dayName.slice(0, 3)}
                        </span>
                      </div>
                      <div className="w-full text-lg text-slate-600 font-[500] text-center">
                        <span
                          className={`${
                            currentDate.getDate() === item.date
                              ? "text-white"
                              : "text-slate-600"
                          }`}
                        >
                          {item.date}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="flex flex-col px-2 overflow-y-auto h-[490px]">
              <div className="text-sm font-bold text-slate-500 my-2">
                {" "}
                {days[currentDate.getDay()]} {currentDate.getDate()}{" "}
                {months[currentDate.getMonth()]}{" "}
              </div>
              <div className="mt-1 px-2">
                <hr />
                <div className="w-full py-1">
                  <div className="flex justify-between items-center">
                    <div className="w-[48%] text-slate-400 text-sm">
                      {" "}
                      09:00 am{" "}
                    </div>
                    <div className="w-[48%] text-base text-slate-600 font-[400]">
                      Heart Surgery
                    </div>
                  </div>
                  <hr />
                </div>
                <div className="w-full py-1">
                  <div className="flex justify-between items-center">
                    <div className="w-[48%] text-slate-400 text-sm">
                      {" "}
                      09:00 am{" "}
                    </div>
                    <div className="w-[48%] text-base text-slate-600 font-[400]">
                      Heart Surgery
                    </div>
                  </div>
                  <hr />
                </div>

                <div className="w-full py-1">
                  <div className="flex justify-between items-center">
                    <div className="w-[48%] text-slate-400 text-sm">
                      {" "}
                      10:00 am{" "}
                    </div>
                    <div className="w-[48%] text-base text-slate-600 font-[400]">
                      Heart Surgery
                    </div>
                  </div>
                  <hr />
                </div>

                <div className="w-full py-1">
                  <div className="flex justify-between items-center">
                    <div className="w-[48%] text-slate-400 text-sm">
                      {" "}
                      11:00 am{" "}
                    </div>
                    <div className="w-[48%] text-base text-slate-600 font-[400]">
                      Heart Surgery
                    </div>
                  </div>
                  <hr />
                </div>

                <div className="w-full py-1">
                  <div className="flex justify-between items-center">
                    <div className="w-[48%] text-slate-400 text-sm">
                      {" "}
                      12:00 am{" "}
                    </div>
                    <div className="w-[48%] text-base text-slate-600 font-[400]">
                      Heart Surgery
                    </div>
                  </div>
                  <hr />
                </div>

                <div className="w-full py-1">
                  <div className="flex justify-between items-center">
                    <div className="w-[48%] text-slate-400 text-sm">
                      {" "}
                      01:00 am{" "}
                    </div>
                    <div className="w-[48%] text-base text-slate-600 font-[400]">
                      Heart Surgery
                    </div>
                  </div>
                  <hr />
                </div>

                <div className="w-full py-1">
                  <div className="flex justify-between items-center">
                    <div className="w-[48%] text-slate-400 text-sm">
                      {" "}
                      02:00 am{" "}
                    </div>
                    <div className="w-[48%] text-base text-slate-600 font-[400]">
                      Heart Surgery
                    </div>
                  </div>
                  <hr />
                </div>

                <div className="w-full py-1">
                  <div className="flex justify-between items-center">
                    <div className="w-[48%] text-slate-400 text-sm">
                      {" "}
                      03:00 am{" "}
                    </div>
                    <div className="w-[48%] text-base text-slate-600 font-[400]">
                      Heart Surgery
                    </div>
                  </div>
                  <hr />
                </div>

                <div className="w-full py-1">
                  <div className="flex justify-between items-center">
                    <div className="w-[48%] text-slate-400 text-sm">
                      {" "}
                      04:00 am{" "}
                    </div>
                    <div className="w-[48%] text-base text-slate-600 font-[400]">
                      Heart Surgery
                    </div>
                  </div>
                  <hr />
                </div>

                <div className="w-full py-1">
                  <div className="flex justify-between items-center">
                    <div className="w-[48%] text-slate-400 text-sm">
                      {" "}
                      05:00 am{" "}
                    </div>
                    <div className="w-[48%] text-base text-slate-600 font-[400]">
                      Heart Surgery
                    </div>
                  </div>
                  <hr />
                </div>

                <div className="w-full py-1">
                  <div className="flex justify-between items-center">
                    <div className="w-[48%] text-slate-400 text-sm">
                      {" "}
                      06:00 am{" "}
                    </div>
                    <div className="w-[48%] text-base text-slate-600 font-[400]">
                      Heart Surgery
                    </div>
                  </div>
                  <hr />
                </div>

                <div className="w-full py-1">
                  <div className="flex justify-between items-center">
                    <div className="w-[48%] text-slate-400 text-sm">
                      {" "}
                      07:00 am{" "}
                    </div>
                    <div className="w-[48%] text-base text-slate-600 font-[400]">
                      Heart Surgery
                    </div>
                  </div>
                  <hr />
                </div>

                <div className="w-full py-1">
                  <div className="flex justify-between items-center">
                    <div className="w-[48%] text-slate-400 text-sm">
                      {" "}
                      08:00 am{" "}
                    </div>
                    <div className="w-[48%] text-base text-slate-600 font-[400]">
                      Heart Surgery
                    </div>
                  </div>
                  <hr />
                </div>

                <div className="w-full py-1">
                  <div className="flex justify-between items-center">
                    <div className="w-[48%] text-slate-400 text-sm">
                      {" "}
                      09:00 am{" "}
                    </div>
                    <div className="w-[48%] text-base text-slate-600 font-[400]">
                      Heart Surgery
                    </div>
                  </div>
                  <hr />
                </div>

                <div className="w-full py-1">
                  <div className="flex justify-between items-center">
                    <div className="w-[48%] text-slate-400 text-sm">
                      {" "}
                      10:00 am{" "}
                    </div>
                    <div className="w-[48%] text-base text-slate-600 font-[400]">
                      Heart Surgery
                    </div>
                  </div>
                  <hr />
                </div>

                <div className="w-full py-1">
                  <div className="flex justify-between items-center">
                    <div className="w-[48%] text-slate-400 text-sm">
                      {" "}
                      11:00 am{" "}
                    </div>
                    <div className="w-[48%] text-base text-slate-600 font-[400]">
                      Heart Surgery
                    </div>
                  </div>
                  <hr />
                </div>

                <div className="w-full py-1">
                  <div className="flex justify-between items-center">
                    <div className="w-[48%] text-slate-400 text-sm">
                      {" "}
                      12:00 am{" "}
                    </div>
                    <div className="w-[48%] text-base text-slate-600 font-[400]">
                      Heart Surgery
                    </div>
                  </div>
                  <hr />
                </div>

                <div className="w-full py-1">
                  <div className="flex justify-between items-center">
                    <div className="w-[48%] text-slate-400 text-sm">
                      {" "}
                      01:00 am{" "}
                    </div>
                    <div className="w-[48%] text-base text-slate-600 font-[400]">
                      Heart Surgery
                    </div>
                  </div>
                  <hr />
                </div>

                <div className="w-full py-1">
                  <div className="flex justify-between items-center">
                    <div className="w-[48%] text-slate-400 text-sm">
                      {" "}
                      02:00 am{" "}
                    </div>
                    <div className="w-[48%] text-base text-slate-600 font-[400]">
                      Heart Surgery
                    </div>
                  </div>
                  <hr />
                </div>

                <div className="w-full py-1">
                  <div className="flex justify-between items-center">
                    <div className="w-[48%] text-slate-400 text-sm">
                      {" "}
                      03:00 am{" "}
                    </div>
                    <div className="w-[48%] text-base text-slate-600 font-[400]">
                      Heart Surgery
                    </div>
                  </div>
                  <hr />
                </div>

                <div className="w-full py-1">
                  <div className="flex justify-between items-center">
                    <div className="w-[48%] text-slate-400 text-sm">
                      {" "}
                      04:00 am{" "}
                    </div>
                    <div className="w-[48%] text-base text-slate-600 font-[400]">
                      Heart Surgery
                    </div>
                  </div>
                  <hr />
                </div>

                <div className="w-full py-1">
                  <div className="flex justify-between items-center">
                    <div className="w-[48%] text-slate-400 text-sm">
                      {" "}
                      05:00 am{" "}
                    </div>
                    <div className="w-[48%] text-base text-slate-600 font-[400]">
                      Heart Surgery
                    </div>
                  </div>
                  <hr />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
