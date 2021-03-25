
const tasks = [
    {
      checked: true,
      text: 'Sign contract for "What are conference organizers afraid of?"',
    },
    {
      checked: false,
      text: "Lines From Great Russian Literature? Or E-mails From My Boss?",
    },
    {
      checked: true,
      text:
        "Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit",
    },
  ];
  
  // ##############################
  // // // table head data and table body data for Tables view
  // #############################
  
  const thead = ["Owner Name", "address", "City", "Amount","Action"];
  const tbody = [
    {
      className: "table-danger",
      data: ["Doris Greene", "Malawi", "Feldkirchen in Kärnten", "$63,542"],
    },
    { className: "", data: ["Mason Porter", "Chile", "Gloucester", "$78,615"] },
    {
      className: "table-warning",
      data: ["Jon Porter", "Portugal", "Gloucester", "$98,615"],
    },
    
  ];
  
  // tasks list for Tasks card in Dashboard view
  // data for <thead> of table in TableList view
  // data for <tbody> of table in TableList view
  export { tasks, thead, tbody };
  