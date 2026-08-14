import React, { useState } from "react";
import { Modal, Form, Input, DatePicker, Button, InputNumber } from "antd";
import { Edit, Trash } from "lucide-react";
import { useExpenses } from "./zustand/useExpense";
import { nanoid } from "nanoid";
import dayjs from "dayjs";

const { TextArea } = Input;

const App = () => {
  const [form] = Form.useForm();
  const [open, setOpen] = useState(false);
  const [editId, setEditId] = useState(null);

  // Destructured the correct actions from the Zustand store
  const { expenses, addExpense, deleteExpense, updateExpense } = useExpenses();

  const handleFormSubmit = (values) => {
    // Transform DayJS object to your stored string format before saving
    const formattedValues = {
      ...values,
      date: dayjs(values.date).format("DD-MM-YYYY"),
    };

    if (editId) {
      // FIXED: Call update action instead of setExpense
      updateExpense(editId, formattedValues);
    } else {
      // FIXED: Assign standard nanoid on structural additions
      formattedValues.id = nanoid();
      addExpense(formattedValues);
    }

    handleClose(); // Dry up state reset execution
  };

  const handleClose = () => {
    setOpen(false);
    form.resetFields();
    setEditId(null);
  };

  const edit = (item) => {
    const formValues = {
      ...item,
      // Parse the stored date string back into a DayJS object for AntD DatePicker
      date: item.date ? dayjs(item.date, "DD-MM-YYYY") : null,
    };

    setOpen(true);
    form.setFieldsValue(formValues);
    setEditId(item.id);
  };

  return (
    <div className="bg-gray-300 h-screen flow-root">
      <div className="bg-white rounded w-3/4 mx-auto py-4 px-6 mt-12 flex flex-col gap-2 h-[80%]">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Expense Tracker</h1>
          <button
            onClick={() => setOpen(true)}
            className="px-6 py-2 bg-blue-500 text-white font-medium hover:scale-105 transition-transform duration-300 rounded"
          >
            Add new
          </button>
        </div>
        <input
          type="text"
          placeholder="Search Expense"
          className="p-2 bg-gray-100 rounded outline-none"
        />

        <div className="overflow-auto flex-1">
          <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
            <thead className="bg-gray-50 text-xs font-semibold uppercase text-gray-700 sticky top-0">
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
              {expenses.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50">
                  {" "}
                  {/* FIXED: Use unique item.id as key */}
                  <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
                    {item.name}
                  </td>
                  <td className="px-6 py-4">{item.description}</td>
                  <td className="px-6 py-4">₹{item.amount}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{item.date}</td>
                  <td className="px-6 py-4">
                    <div className="flex gap-2">
                      <button
                        onClick={() => edit(item)}
                        className="bg-green-500 text-white p-1.5 rounded cursor-pointer hover:bg-green-600 transition-colors"
                      >
                        <Edit size={18} />
                      </button>
                      <button
                        onClick={() => deleteExpense(item.id)}
                        className="bg-rose-500 text-white p-1.5 rounded cursor-pointer hover:bg-rose-600 transition-colors"
                      >
                        <Trash size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex justify-end items-center pt-4 border-t">
          <h1 className="text-3xl font-bold">
            Total Expense - ₹
            {expenses.reduce((sum, item) => sum + Number(item.amount || 0), 0)}
          </h1>
        </div>
      </div>

      <Modal
        open={open}
        footer={null}
        onCancel={handleClose}
        title={
          <h1 className="text-2xl font-semibold">
            {editId ? "Edit Expense" : "Add Expense"}
          </h1>
        }
      >
        <Form
          onFinish={handleFormSubmit}
          form={form}
          layout="horizontal"
          className="mt-4"
        >
          <Form.Item
            name="name"
            label="Name"
            rules={[{ required: true, message: "Please enter name!" }]}
          >
            <Input size="large" />
          </Form.Item>
          <Form.Item
            name="description"
            label="Description"
            rules={[{ required: true, message: "Please enter a description!" }]}
          >
            <TextArea rows={4} />
          </Form.Item>
          <Form.Item
            name="amount"
            label="Amount"
            rules={[{ required: true, message: "Please enter an amount!" }]}
          >
            <InputNumber
              className="!w-full"
              size="large"
              min={0}
              precision={2}
            />
          </Form.Item>
          <Form.Item
            label="Date"
            name="date"
            rules={[{ required: true, message: "Please pick a date!" }]}
          >
            <DatePicker className="!w-full" size="large" format="DD-MM-YYYY" />
          </Form.Item>
          <Form.Item className="mb-0 flex justify-end">
            <Button size="large" className="mr-2" onClick={handleClose}>
              Cancel
            </Button>
            <Button type="primary" htmlType="submit" size="large">
              {editId ? "Save Changes" : "Add Expense"}
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default App;
