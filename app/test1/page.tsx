// app/dashboard/page.tsx
import React from "react";

type StatCardProps = {
  label: string;
  value: string | number;
  subtext?: string;
};

const stats = [
  { label: "Total Users", value: 1284, subtext: "+12 today" },
  { label: "Active Sessions", value: 89, subtext: "Last 5 minutes" },
  { label: "Monthly Revenue", value: "$24,580", subtext: "This month" },
  { label: "Support Tickets", value: 17, subtext: "4 open" },
];

const recentOrders = [
  { id: "ORD-001", customer: "John Doe", total: "$199.00", status: "Paid" },
  { id: "ORD-002", customer: "Jane Smith", total: "$89.99", status: "Pending" },
  { id: "ORD-003", customer: "Mike Johnson", total: "$329.50", status: "Paid" },
  { id: "ORD-004", customer: "Alice Lee", total: "$49.00", status: "Refunded" },
];

const activities = [
  { time: "10:32", text: "New user signed up: Sarah K." },
  { time: "09:58", text: "Order ORD-003 marked as Paid." },
  { time: "09:10", text: "Support ticket #234 closed." },
  { time: "08:45", text: "New comment on blog post." },
];

const StatCard: React.FC<StatCardProps> = ({ label, value, subtext }) => (
  <div
    style={{
      padding: "1rem",
      borderRadius: "0.5rem",
      border: "1px solid #e5e7eb",
      background: "#ffffff",
      boxShadow: "0 1px 2px rgba(0,0,0,0.04)",
    }}
  >
    <div style={{ fontSize: "0.85rem", color: "#6b7280" }}>{label}</div>
    <div style={{ fontSize: "1.5rem", fontWeight: 600, marginTop: "0.25rem" }}>
      {value}
    </div>
    {subtext && (
      <div style={{ fontSize: "0.8rem", color: "#9ca3af", marginTop: "0.25rem" }}>
        {subtext}
      </div>
    )}
  </div>
);

const DashboardPage: React.FC = () => {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f3f4f6",
        padding: "1.5rem",
        fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      }}
    >
      {/* Header */}
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "1.5rem",
        }}
      >
        <div>
          <h1 style={{ fontSize: "1.5rem", fontWeight: 600 }}>Dashboard</h1>
          <p style={{ color: "#6b7280", fontSize: "0.9rem", marginTop: "0.25rem" }}>
            Overview of your app performance
          </p>
        </div>
        <button
          style={{
            padding: "0.5rem 1rem",
            borderRadius: "0.375rem",
            border: "none",
            background: "#2563eb",
            color: "white",
            fontSize: "0.9rem",
            cursor: "pointer",
          }}
        >
          + New Report
        </button>
      </header>

      {/* Top stats */}
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
          gap: "1rem",
          marginBottom: "1.5rem",
        }}
      >
        {stats.map((item) => (
          <StatCard
            key={item.label}
            label={item.label}
            value={item.value}
            subtext={item.subtext}
          />
        ))}
      </section>

      {/* Main content grid */}
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr",
          gap: "1.5rem",
        }}
      >
        {/* Recent orders table */}
        <div
          style={{
            borderRadius: "0.5rem",
            border: "1px solid #e5e7eb",
            background: "#ffffff",
            padding: "1rem",
          }}
        >
          <h2 style={{ fontSize: "1.1rem", fontWeight: 600, marginBottom: "0.75rem" }}>
            Recent Orders
          </h2>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.9rem" }}>
            <thead>
              <tr style={{ textAlign: "left", color: "#6b7280" }}>
                <th style={{ padding: "0.5rem 0" }}>Order ID</th>
                <th style={{ padding: "0.5rem 0" }}>Customer</th>
                <th style={{ padding: "0.5rem 0" }}>Total</th>
                <th style={{ padding: "0.5rem 0" }}>Status</th>
              </tr>
            </thead>
            <tbody>
              {recentOrders.map((order) => (
                <tr key={order.id} style={{ borderTop: "1px solid #e5e7eb" }}>
                  <td style={{ padding: "0.5rem 0" }}>{order.id}</td>
                  <td style={{ padding: "0.5rem 0" }}>{order.customer}</td>
                  <td style={{ padding: "0.5rem 0" }}>{order.total}</td>
                  <td style={{ padding: "0.5rem 0" }}>
                    <span
                      style={{
                        padding: "0.15rem 0.5rem",
                        borderRadius: "9999px",
                        fontSize: "0.75rem",
                        background:
                          order.status === "Paid"
                            ? "rgba(34, 197, 94, 0.1)"
                            : order.status === "Pending"
                            ? "rgba(245, 158, 11, 0.1)"
                            : "rgba(239, 68, 68, 0.1)",
                        color:
                          order.status === "Paid"
                            ? "#16a34a"
                            : order.status === "Pending"
                            ? "#d97706"
                            : "#dc2626",
                      }}
                    >
                      {order.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Activity + fake chart */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {/* Fake chart card */}
          <div
            style={{
              borderRadius: "0.5rem",
              border: "1px solid #e5e7eb",
              background: "#ffffff",
              padding: "1rem",
            }}
          >
            <h2 style={{ fontSize: "1.1rem", fontWeight: 600, marginBottom: "0.75rem" }}>
              Traffic (Last 7 days)
            </h2>
            <div
              style={{
                height: "120px",
                borderRadius: "0.5rem",
                background:
                  "linear-gradient(to top right, rgba(37,99,235,0.15), rgba(59,130,246,0.4))",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Simple “bars” to fake a chart */}
              <div
                style={{
                  position: "absolute",
                  inset: "0.75rem",
                  display: "flex",
                  alignItems: "flex-end",
                  gap: "0.5rem",
                }}
              >
                {[40, 60, 35, 80, 55, 70, 90].map((h, i) => (
                  <div
                    key={i}
                    style={{
                      flex: 1,
                      borderRadius: "0.25rem",
                      background: "rgba(255,255,255,0.9)",
                      height: `${h}%`,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Activity feed */}
          <div
            style={{
              borderRadius: "0.5rem",
              border: "1px solid #e5e7eb",
              background: "#ffffff",
              padding: "1rem",
              flex: 1,
            }}
          >
            <h2 style={{ fontSize: "1.1rem", fontWeight: 600, marginBottom: "0.75rem" }}>
              Activity
            </h2>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, fontSize: "0.9rem" }}>
              {activities.map((item, idx) => (
                <li
                  key={idx}
                  style={{
                    display: "flex",
                    gap: "0.5rem",
                    padding: "0.4rem 0",
                    borderTop: idx === 0 ? "none" : "1px solid #f3f4f6",
                  }}
                >
                  <span style={{ color: "#9ca3af", width: "3rem", flexShrink: 0 }}>
                    {item.time}
                  </span>
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
};

export default DashboardPage;