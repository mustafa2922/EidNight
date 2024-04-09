import React from "react";
import PatientDetails from "../../Components/PatientDetails";

function Home() {
  return (
    <div className="flex flex-row px-2  w-full  h-screen bg-[#e8f5ff]">
      <div className="w-[20%]  bg-white "></div>

      <div className="flex flex-row justify-between  w-[80%] px-3 py-2 border bg-[#e8f5ff]">
        <div className="w-[48%] flex flex-col  bg-[#e8f5ff]">
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
              <div className="flex flex-col w-full">
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
                <div className="w-[20%]"></div>
              </div>
            </div>

            <div className="w-[48%] bg-white rounded-lg p-3">
              <div>
                <span className="text-xl text-slate-700 ">Air Bubble</span>
                <hr />
              </div>

              <div className="mt-4 h-24">
                <div className="text-[#0174CF] text-xl font-[600]">
                  No <br /> Issues <br /> Till now{" "}
                </div>
              </div>

              <div className="mt-3">
                <div className="text-slate-500 text-sm">Last monitored: </div>
                <div className="font-bold text-sm">10 sec ago</div>
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

        <div className="w-[36%] flex flex-col  bg-[#e8f5ff] "></div>
        <div className="w-[22%] flex flex-col  bg-[#e8f5ff] "></div>
      </div>
    </div>
  );
}

export default Home;
