"use client";

import { useBlogs } from "@/shared/hooks/useBlogs";
import { Card, Col, Row, Skeleton } from "antd";
import { useRouter, useSearchParams } from "next/navigation";

export default function BlogsPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const blogIdParam = searchParams.get("id");
  const blogId = blogIdParam ? Number(blogIdParam) : null;
  const { blogs } = useBlogs();
  const blog = blogs.find((item) => item.id === blogId);
  const relevantBlogs = blogs
    .filter((item) => item.id !== blogId)
    .slice(0, 6);

  if (blogs.length === 0) {
    return <Skeleton active style={{ padding: "24px" }} />;
  }

  if (!blog) {
    return <h2 style={{ padding: "24px" }}>Blog not found</h2>;
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "white",
        padding: "40px 16px",
      }}
    >
      <Row justify="center">
        <Col xs={24} md={22} lg={18}>
          <Card style={{ border: "none", boxShadow: "none" }}>
            <h1
              style={{
                fontSize: "36px",
                fontWeight: "bold",
                lineHeight: 1.3,
                marginBottom: "14px",
                color: "#222222",
              }}
            >
              {blog.title}
            </h1>

            <p
              style={{
                color: "#666666",
                fontSize: "17px",
                fontStyle: "italic",
                marginBottom: "32px",
              }}
            >
              📝 [SEO] {blog.seo} &nbsp;&nbsp; 🏷️ Blog &nbsp;&nbsp; 📅 {blog.Published_date}
            </p>

            <div
              style={{
                maxWidth: "720px",
                backgroundColor: "#fff1f2",
                border: "1px solid #f3b8bd",
                borderRadius: "6px",
                padding: "20px 28px",
                marginBottom: "28px",
              }}
            >
              <h2
                style={{
                  textAlign: "center",
                  color: "#e21d2b",
                  fontSize: "24px",
                  fontWeight: "bold",
                  marginTop: 0,
                  marginBottom: "10px",
                }}
              >
                Quick view⌄
              </h2>

              {blog.body.map((bodyItem, index) => {
                const headerName = Object.keys(bodyItem)[0];

                return (
                  <p
                    key={index}
                    style={{ fontSize: "18px", margin: "8px 0" }}
                  >
                    {index + 1}. {" "}
                    <a href={`#section-${index}`} style={{ color: "#e21d2b" }}>
                      {headerName}
                    </a>
                  </p>
                );
              })}
            </div>

            <p
              style={{
                fontSize: "20px",
                lineHeight: 1.7,
                color: "#2b2b2b",
                marginBottom: "26px",
              }}
            >
              {blog.summary}
            </p>

            <img
              src={blog.image}
              alt={blog.title}
              style={{
                width: "100%",
                maxHeight: "600px",
                objectFit: "cover",
                display: "block",
                marginBottom: "34px",
              }}
            />

            {blog.body.map((bodyItem, index) => {
              const headerName = Object.keys(bodyItem)[0];
              const content = bodyItem[headerName].content;

              return (
                <div
                  id={`section-${index}`}
                  key={index}
                  style={{ marginTop: "34px", scrollMarginTop: "20px" }}
                >
                  <h2
                    style={{
                      fontSize: "28px",
                      fontWeight: "bold",
                      color: "#e21d2b",
                      marginBottom: "12px",
                    }}
                  >
                    {index + 1}. {headerName}
                  </h2>
                  <p
                    style={{
                      fontSize: "19px",
                      lineHeight: 1.8,
                      color: "#292929",
                    }}
                  >
                    {content}
                  </p>
                </div>
              );
            })}

            <div
              style={{
                borderTop: "1px solid #dddddd",
                marginTop: "60px",
                paddingTop: "32px",
              }}
            >
              <h2
                style={{
                  fontSize: "30px",
                  fontWeight: "bold",
                  color: "#222222",
                  marginBottom: "24px",
                  textTransform: "uppercase",
                }}
              >
                Relevant blogs
              </h2>

              <Row gutter={[36, 36]}>
                {relevantBlogs.map((relevantBlog) => (
                  <Col xs={24} sm={12} lg={8} key={relevantBlog.id}>
                    <button
                      onClick={() =>
                        router.push(`/blogs?id=${relevantBlog.id}`)
                      }
                      style={{
                        width: "100%",
                        padding: 0,
                        border: "none",
                        backgroundColor: "transparent",
                        cursor: "pointer",
                        textAlign: "left",
                      }}
                    >
                      <img
                        src={relevantBlog.image}
                        alt={relevantBlog.title}
                        style={{
                          width: "100%",
                          height: "190px",
                          objectFit: "cover",
                          display: "block",
                        }}
                      />
                      <h3
                        style={{
                          fontSize: "21px",
                          lineHeight: 1.45,
                          fontWeight: "normal",
                          color: "#222222",
                          marginTop: "12px",
                          marginBottom: 0,
                        }}
                      >
                        {relevantBlog.title}
                      </h3>
                    </button>
                  </Col>
                ))}
              </Row>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
