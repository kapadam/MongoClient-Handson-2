const express=require("express");
const employeeController=require(".././controllers/employee");
const router=express.Router();

router.post("/employee",employeeController.saveEmployeeData);
router.get("/employeedata",employeeController.getEmployeeData);
router.get('/salary', employeeController.getSalaryThirtyThousand);
router.get('/experience', employeeController.getExpTwoYears);
router.get('/grad-exp', employeeController.getYearGrandAndExp);
router.put('/update', employeeController.updateSalary);
router.delete('/delete', employeeController.deleteYLastCompany);

module.exports=router;