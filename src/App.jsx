import { Modal, Form, Input, DatePicker, Button, InputNumber } from "antd";
import FormItem from "antd/es/form/FormItem";
import TextArea from "antd/es/input/TextArea";
import React, { useState } from "react";
import moment from "moment";
import { useForm } from "antd/es/form/Form";
import { Delete, DeleteIcon, Edit } from "lucide-react";

const App = () => {
  const [form] = Form.useForm();
  const [open, setOpen] = useState(false);

  const handleFormSubmit = (values) => {
    values.date = moment(values.date).toDate();
    console.log(values);
    setOpen(false);
    // form.resetFields()
  };

  const handleClose = () => {
    setOpen(false);
    // form.resetFields()
  };

  return (
    <div className="bg-gray-300 h-screen flow-root">
      <div className="bg-white rounded w-3/4 mx-auto py-4 px-6 mt-12 flex flex-col gap-2 max-h-[80%]">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Expense Tracker</h1>
          <button
            onClick={() => setOpen(true)}
            className="px-6 py-2 bg-blue-500 hover:scale-105 transition-transform duration-300 rounded"
          >
            Add new
          </button>
        </div>
        <input
          type="text"
          placeholder="Search Expense"
          className="p-2 bg-gray-300 rounded outline-none"
        />

        {/* 2. Main Table Element */}
        <div className="overflow-auto">
        <table className="w-full border-collapse bg-white text-left text-sm text-gray-500 ">
          {/* Table Header containing <th> tags */}
          <thead className="bg-gray-50 text-xs font-semibold uppercase text-gray-700 ">
            <tr>
              <th scope="col" className="px-6 py-4">
                Name
              </th>
              <th scope="col" className="px-6 py-4">
                Description
              </th>
              <th scope="col" className="px-6 py-4">
                Amount
              </th>
              <th scope="col" className="px-6 py-4">
                Date
              </th>
              <th scope="col" className="px-6 py-4">
                Options
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 border-t border-gray-200">
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">gym</td>
              <td>gym membership</td>
              <td>1000</td>
              <td>21/10/2022</td>
              <td>
                <div className="flex gap-2">
                  <button className="bg-green-500 text-white p-1 rounded cursor-pointer">
                    {" "}
                    <Edit size={24} />
                  </button>
                  <button className="bg-rose-500 text-white p-1 rounded cursor-pointer">
                    <DeleteIcon size={24} />
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">gym</td>
              <td>gym membership</td>
              <td>1000</td>
              <td>21/10/2022</td>
              <td>
                <div className="flex gap-2">
                  <button className="bg-green-500 text-white p-1 rounded cursor-pointer">
                    {" "}
                    <Edit size={24} />
                  </button>
                  <button className="bg-rose-500 text-white p-1 rounded cursor-pointer">
                    <DeleteIcon size={24} />
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">gym</td>
              <td>gym membership</td>
              <td>1000</td>
              <td>21/10/2022</td>
              <td>
                <div className="flex gap-2">
                  <button className="bg-green-500 text-white p-1 rounded cursor-pointer">
                    {" "}
                    <Edit size={24} />
                  </button>
                  <button className="bg-rose-500 text-white p-1 rounded cursor-pointer">
                    <DeleteIcon size={24} />
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">gym</td>
              <td>gym membership</td>
              <td>1000</td>
              <td>21/10/2022</td>
              <td>
                <div className="flex gap-2">
                  <button className="bg-green-500 text-white p-1 rounded cursor-pointer">
                    {" "}
                    <Edit size={24} />
                  </button>
                  <button className="bg-rose-500 text-white p-1 rounded cursor-pointer">
                    <DeleteIcon size={24} />
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">gym</td>
              <td>gym membership</td>
              <td>1000</td>
              <td>21/10/2022</td>
              <td>
                <div className="flex gap-2">
                  <button className="bg-green-500 text-white p-1 rounded cursor-pointer">
                    {" "}
                    <Edit size={24} />
                  </button>
                  <button className="bg-rose-500 text-white p-1 rounded cursor-pointer">
                    <DeleteIcon size={24} />
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">gym</td>
              <td>gym membership</td>
              <td>1000</td>
              <td>21/10/2022</td>
              <td>
                <div className="flex gap-2">
                  <button className="bg-green-500 text-white p-1 rounded cursor-pointer">
                    {" "}
                    <Edit size={24} />
                  </button>
                  <button className="bg-rose-500 text-white p-1 rounded cursor-pointer">
                    <DeleteIcon size={24} />
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">gym</td>
              <td>gym membership</td>
              <td>1000</td>
              <td>21/10/2022</td>
              <td>
                <div className="flex gap-2">
                  <button className="bg-green-500 text-white p-1 rounded cursor-pointer">
                    {" "}
                    <Edit size={24} />
                  </button>
                  <button className="bg-rose-500 text-white p-1 rounded cursor-pointer">
                    <DeleteIcon size={24} />
                  </button>
                </div>
              </td>
            </tr>
            
          </tbody>
        </table>
        </div>

        <div className="flex justify-end items-center">
          <h1 className="text-3xl font-bold">Total Expense - ₹50000</h1>
        </div>
      </div>

      <Modal open={open} footer={null} onCancel={handleClose}>
        <h1 className="text-2xl font-semibold mb-4">Add Expense</h1>
        <Form onFinish={handleFormSubmit} form={form}>
          <FormItem
            name="name"
            label="Name"
            rules={[{ required: true, message: "Please enter name!" }]}
          >
            <Input />
          </FormItem>
          <FormItem
            name="description"
            label="Description"
            rules={[{ required: true }]}
          >
            <TextArea rows={4} />
          </FormItem>
          <FormItem
            name="amount"
            label="Amount"
            rules={[{ required: true }]}
          >
            <InputNumber className="!w-full" size = "large"/>
          </FormItem>
          <FormItem
            label="Date"
            name="date"
            rules={[{ required: true }]}
          >
            
            <DatePicker className="!w-full" size = "large"/>
          </FormItem>
          <FormItem>
            <Button type="primary" htmlType="submit">
              Add
            </Button>
          </FormItem>
        </Form>
      </Modal>
    </div>
  );
};

export default App;
