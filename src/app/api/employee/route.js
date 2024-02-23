import ConnectDb  from "@/database/db";
import  Employee  from "@/models/Employee";
ConnectDb();


export async function GET() {
  try {
    const employees = await Employee.find({});
    console.log(employees);
    return new Response(JSON.stringify(employees));
  } catch (error) {
    console.error("API Error:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
}

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, dob, phone, photo } = body; 
    console.log(body);
    const newEmployee = new Employee({ name, dob, phone, photo });
    await newEmployee.save();
    return new Response(JSON.stringify(newEmployee), { status: 201 });
  } catch (error) {
    console.error("API Error:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
}
