import Provider from "@Provider";
import Nav from "@components/Nav";
import "@styles/globals.css";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Promptopia",
  description: "Discover & Share AI Prompts",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <main className="app">
            <div className="main">
              <div className="gradient" />
            </div>
            <Nav />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
}
