import React, { useEffect, useState } from "react";
import { Table, Button, Modal, Form, Input } from "antd";
import { CheckOutlined, CloseOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment/moment";
import { createStock, getAllStocks } from "../store/redux/stocks";
import { formatMoney } from "../utils/convertMoney";
const tableHeader = [
  {
    title: "Mã chứng khoán",
    dataIndex: "stockSymbol",
    key: "stockSymbol",
    align: "center",
  },
  {
    title: "Giá chứng khoán",
    dataIndex: "stockPrice",
    key: "stockPrice",
    align: "right",
  },
  {
    title: "Lợi nhuận / 1 cổ phiếu",
    dataIndex: "eps",
    key: "eps",
    align: "right",
  },
  {
    title: "Lợi nhuận ròng",
    dataIndex: "netProfit",
    key: "netProfit",
    align: "right",
  },
  {
    title: "Tổng tài sản",
    dataIndex: "totalAssets",
    key: "totalAssets",
    align: "right",
  },
  {
    title: "Tổng doanh thu",
    dataIndex: "revenue",
    key: "revenue",
    align: "right",
  },
  {
    title: "Tổng tài sản hiện tại",
    key: "currentAssets",
    dataIndex: "currentAssets",
    align: "right",
  },
  {
    title: "Nợ hiện tại",
    key: "currentDebt",
    dataIndex: "currentDebt",
    align: "right",
  },
  {
    title: "Tổng số nợ",
    key: "totalLiabilities",
    dataIndex: "totalLiabilities",
    align: "right",
  },
  {
    title: "Đầu tư",
    key: "label",
    dataIndex: "label",
    align: "center",
  },
];

const Stock = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const showModal = () => {
    setOpen(true);
  };

  const stocks = useSelector((state) => state.stocks.data);
  const loading = useSelector((state) => state.stocks.loading);
  const [columns, setColumns] = useState([]);

  const onFinish = async (value) => {
    const data = {
      ...value,
      netProfit: Number(value.netProfit),
      totalAssets: Number(value.totalAssets),
      revenue: Number(value.revenue),
      currentAssets: Number(value.currentAssets),
      currentDebt: Number(value.currentDebt),
      totalLiabilities: Number(value.totalLiabilities),
      stockPrice: Number(value.stockPrice),
      eps: Number(value.eps),
    };
    await dispatch(createStock(data));
    await dispatch(getAllStocks());
    setOpen(false);
  };

  const initilizerValueForm = {
    stockSymbol: "",
    netProfit: 0,
    totalAssets: 0,
    revenue: 0,
    currentAssets: 0,
    currentDebt: 0,
    totalLiabilities: 0,
    stockPrice: 0,
    eps: 0,
    createdDate: null,
    label: null,
  };

  useEffect(() => {
    dispatch(getAllStocks());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const newCols =
      stocks &&
      stocks.length &&
      stocks.map((item) => {
        return {
          ...item,
          key: item.id,
          netProfit: formatMoney(item.netProfit),
          stockPrice: formatMoney(item.stockPrice),
          eps: formatMoney(item.eps),
          totalLiabilities: formatMoney(item.totalLiabilities),
          currentDebt: formatMoney(item.currentDebt),
          currentAssets: formatMoney(item.currentAssets),
          revenue: formatMoney(item.revenue),
          totalAssets: formatMoney(item.totalAssets),
          createdDate: moment(item.createdDate).format("DD-MM-YYYY"),
          label:
            item.label === "ATTRACTIVE" ? (
              <CheckOutlined color="#32cd32" />
            ) : (
              <CloseOutlined color="#ff6347" />
            ),
        };
      });
    setColumns(newCols);
  }, [stocks]);

  return (
    <>
      <Button
        onClick={showModal}
        className="mb-4"
        style={{ float: "right" }}
        type="primary"
      >
        Thêm mã chứng khoán
      </Button>
      <Table
        loading={loading}
        direction="center"
        columns={tableHeader}
        dataSource={columns}
        bordered={true}
      ></Table>
      <Modal closable={true} title="Thông tin mã" open={open} footer={null}>
        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          initialValues={initilizerValueForm}
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item
            label="Mã chứng khoán"
            name="stockSymbol"
            style={{
              textAlign: "center",
            }}
            rules={[
              {
                required: true,
                message: "Mã chứng khoán không được để trống!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Giá chứng khoán"
            name="stockPrice"
            style={{
              textAlign: "center",
            }}
            rules={[
              {
                required: true,
                message: "Giá chứng khoán không được để trống!",
              },
            ]}
          >
            <Input type="number" />
          </Form.Item>
          <Form.Item
            label="Lợi nhuận / cổ phiếu"
            name="eps"
            style={{
              textAlign: "center",
            }}
            rules={[
              {
                required: true,
                message: "Lợi nhuận / cổ phiếu không được để trống!",
              },
            ]}
          >
            <Input type="number" />
          </Form.Item>
          <Form.Item
            label="Lợi nhuận ròng"
            name="netProfit"
            style={{
              textAlign: "center",
            }}
            rules={[
              {
                required: true,
                message: "Lợi nhuận ròng không được để trống!",
              },
            ]}
          >
            <Input type="number" />
          </Form.Item>
          <Form.Item
            label="Tổng tài sản"
            name="totalAssets"
            style={{
              textAlign: "center",
            }}
            rules={[
              {
                required: true,
                message: "Tổng tài sản không được để trống!",
              },
            ]}
          >
            <Input type="number" />
          </Form.Item>
          <Form.Item
            label="Tổng doanh thu"
            name="revenue"
            style={{
              textAlign: "center",
            }}
            rules={[
              {
                required: true,
                message: "Tổng doanh thu không được để trống!",
              },
            ]}
          >
            <Input type="number" />
          </Form.Item>
          <Form.Item
            label="Tổng tài sản hiện tại"
            name="currentAssets"
            style={{
              textAlign: "center",
            }}
            rules={[
              {
                required: true,
                message: "Tổng tài sản hiện tại không được để trống!",
              },
            ]}
          >
            <Input type="number" />
          </Form.Item>
          <Form.Item
            label="Số nợ hiện tại"
            name="currentDebt"
            style={{
              textAlign: "center",
            }}
            rules={[
              {
                required: true,
                message: "Số nợ hiện tại không được để trống!",
              },
            ]}
          >
            <Input type="number" />
          </Form.Item>
          <Form.Item
            label="Tổng số nợ"
            name="totalLiabilities"
            style={{
              textAlign: "center",
            }}
            rules={[
              {
                required: true,
                message: "Tổng số nợ không được để trống!",
              },
            ]}
          >
            <Input type="number" />
          </Form.Item>
          <Form.Item
            wrapperCol={{
              offset: 20,
              span: 4,
            }}
            className="text-right"
          >
            <Button type="primary" htmlType="submit">
              Tạo mã
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default Stock;
