const axiosFile = require("axios-file");

const states = [
  "Assam",
  "Andaman_Nicobar",
  "Andhra_Pradesh",
  "Arunachal_Pradesh",
  "Assam",
  "Bihar",
  "Chandigarh",
  "Chhattisgarh",
  "Dadra_Nagar_Haveli",
  "Daman_Diu",
  "Delhi",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal",
  "Jammu",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Lakshadweep",
  "Madhya_Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Puducherry",
  "Punjab",
  "Rajasthan",
  "Tamil_Nadu",
  "Telangana",
  "Tripura",
  "Uttar_Pradesh",
  "Uttarakhand",
  "West_Bengal",
];

console.log("Downloading files...\n");

const requests = states.map((state) => {
  console.log(`Downloading file - ${state}.xlsx`);
  return axiosFile({
    url: `http://reports.mca.gov.in/Reports/MasterDataExcels/company_master_data_mar_2015_${state}.xlsx`,
    method: "get",
    savePath: `${__dirname}/${state}.xlsx`,
  });
});

Promise.all([...requests])
  .then((response) => {
    console.log("\nAll files Downloaded :)");
  })
  .catch(() => {
    console.log("Something went wrong");
  });
