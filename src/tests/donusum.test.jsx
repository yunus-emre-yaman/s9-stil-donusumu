import { beforeEach, expect, test } from "vitest";
import { render } from "@testing-library/react";
import { addDays, format } from "date-fns";

import path from "path";
import fs from "fs";
import Task from "./../components/Task.jsx";

const pjPath = path.resolve(__dirname, "./../../package.json");
const pkg = JSON.parse(fs.readFileSync(pjPath, "utf-8"));

const taskPath = path.resolve(__dirname, "./../components/Task.jsx");
const taskCode = fs.readFileSync(taskPath, "utf-8");

const indexCssPath = path.resolve(__dirname, "./../index.css");
const indexCssCode = fs.readFileSync(indexCssPath, "utf-8");

const date = new Date();
const taskObj = {
  id: 1,
  title: "Projeyi baştan sona oku",
  description:
    "Bugün öğrendiklerimizden hangilerini projede kullanabiliriz, hangi kısımları mevcut bilgimizle yapabiliriz?",
  people: ["Ömer", "emre"],
  deadline: format(addDays(date, 4), "yyyy-MM-dd"),
  status: "yapıldı",
};

test("tailwindcss ve date-fns paketleri kurulmuş mu?", () => {
  expect(
    pkg.dependencies["tailwindcss"] || pkg.devDependencies["date-fns"]
  ).toBeDefined();
  expect(
    pkg.dependencies["date-fns"] || pkg.devDependencies["tailwindcss"]
  ).toBeDefined();
});

beforeEach(() => {
  render(<Task taskObj={taskObj} onComplete={() => {}} />);
});

test(".task classındaki padding için doğru tailwindcss classı kullanılmış mı?", async () => {
  const div = document.querySelector("div>div");
  expect(div).toHaveClass("p-6");
});

test(".task classındaki background için doğru tailwindcss classı kullanılmış mı?", async () => {
  const div = document.querySelector("div>div");
  expect(div).toHaveClass("bg-white");
});

test(".task classındaki border-radius için doğru tailwindcss classı kullanılmış mı?", async () => {
  const div = document.querySelector("div>div");
  expect(div).toHaveClass("rounded-[5px]");
});

test(".task classındaki line-height için doğru tailwindcss classı kullanılmış mı?", async () => {
  const div = document.querySelector("div>div");
  expect(div).toHaveClass("leading-normal");
});

test(".task classındaki margin-top için doğru tailwindcss classı kullanılmış mı?", async () => {
  const div = document.querySelector("div>div");
  expect(div).toHaveClass("mt-4");
});

test(".task classındaki box-shadow için doğru tailwindcss classı arbitrary değer olarak kullanılmış mı?", async () => {
  const div = document.querySelector("div>div");
  expect(div).toHaveClass("shadow-[0_4px_5px_0_rgb(0 0 0 / 10%)]");
});

test("h3 deki font-size için doğru tailwindcss classı kullanılmış mı?", async () => {
  const div = document.querySelector("div>div>h3");
  expect(div).toHaveClass("text-lg");
});

test("h3 deki color için doğru tailwindcss classı arbitrary değer olarak kullanılmış mı?", async () => {
  const div = document.querySelector("div>div>h3");
  expect(div).toHaveClass("text-[#c8781a]");
});

test("p deki padding için doğru tailwindcss classları kullanılmış mı?", async () => {
  const div = document.querySelector("div>div>p");
  expect(div).toHaveClass("pt-2");
  expect(div).toHaveClass("pb-3");
});

test("p deki font-size için doğru tailwindcss classı kullanılmış mı?", async () => {
  const div = document.querySelector("div>div>p");
  expect(div).toHaveClass("text-sm");
});

test("p deki color için doğru tailwindcss classı arbitrary değer olarak kullanılmış mı?", async () => {
  const div = document.querySelector("div>div>p");
  expect(div).toHaveClass("text-[#444]");
});

test("buttondaki display için doğru tailwindcss classı kullanılmış mı?", async () => {
  const div = document.querySelector("div>div>button");
  expect(div).toHaveClass("block");
});

test("buttondaki padding için doğru tailwindcss classları kullanılmış mı?", async () => {
  const div = document.querySelector("div>div>button");
  expect(div).toHaveClass("py-2");
  expect(div).toHaveClass("px-3");
});

test("buttondaki margin-left için doğru tailwindcss classı kullanılmış mı?", async () => {
  const div = document.querySelector("div>div>button");
  expect(div).toHaveClass("ml-auto");
});

test("buttondaki background-color için doğru tailwindcss classı arbitrary değer olarak kullanılmış mı?", async () => {
  const div = document.querySelector("div>div>button");
  expect(div).toHaveClass("bg-[#fecc91]");
});

test("buttondaki box-shadow için doğru tailwindcss classı arbitrary değer olarak kullanılmış mı?", async () => {
  const div = document.querySelector("div>div>button");
  expect(div).toHaveClass("shadow-[0_4px_5px_0_rgb(0 0 0 / 5%)]");
});

test("buttondaki border-radius için doğru tailwindcss classı kullanılmış mı?", async () => {
  const div = document.querySelector("div>div>button");
  expect(div).toHaveClass("rounded-sm");
});

test("buttondaki border için doğru tailwindcss classı kullanılmış mı?", async () => {
  const div = document.querySelector("div>div>button");
  expect(div).toHaveClass("border-0");
});

test("buttondaki cursor için doğru tailwindcss classı kullanılmış mı?", async () => {
  const div = document.querySelector("div>div>button");
  expect(div).toHaveClass("cursor-pointer");
});

test("pill classında display için doğru tailwindcss classı kullanılmış mı?", async () => {
  const div = document.querySelectorAll("div>div>span");
  expect(div[1]).toHaveClass("inline-block");
});

test("pill classında padding için doğru tailwindcss classları kullanılmış mı?", async () => {
  const div = document.querySelectorAll("div>div>span");
  expect(div[1]).toHaveClass("py-1");
  expect(div[1]).toHaveClass("px-3");
});

test("pill classında font-size için doğru tailwindcss classı kullanılmış mı?", async () => {
  const div = document.querySelectorAll("div>div>span");
  expect(div[1]).toHaveClass("text-sm");
});

test("pill classında border için doğru tailwindcss classları kullanılmış mı?", async () => {
  const div = document.querySelectorAll("div>div>span");
  expect(div[1]).toHaveClass("border");
  expect(div[1]).toHaveClass("border-[#ccc]");
});

test("pill classında marginler için doğru tailwindcss classları kullanılmış mı?", async () => {
  const div = document.querySelectorAll("div>div>span");
  expect(div[1]).toHaveClass("mr-1");
  expect(div[1]).toHaveClass("mb-1.5");
});

test("pill classında border-radius için doğru tailwindcss classı arbitrary değer olarak kullanılmış mı?", async () => {
  const div = document.querySelectorAll("div>div>span");
  expect(div[1]).toHaveClass("rounded-[30px]");
});

test("deadline classında font-size için doğru tailwindcss classı kullanılmış mı?", async () => {
  const div = document.querySelector("div>div>div");
  expect(div).toHaveClass("text-xs");
});

test("deadline classında padding-top için doğru tailwindcss classı kullanılmış mı?", async () => {
  const div = document.querySelector("div>div>div");
  expect(div).toHaveClass("pt-1");
});

test("deadline classındaki spanda padding için doğru tailwindcss classları kullanılmış mı?", async () => {
  const div = document.querySelectorAll("div>div>span");
  expect(div[0]).toHaveClass("py-1");
  expect(div[0]).toHaveClass("px-2");
});

test("deadline classındaki spanda border-radius için doğru tailwindcss classı kullanılmış mı?", async () => {
  const div = document.querySelectorAll("div>div>span");
  expect(div[0]).toHaveClass("rounded-xs");
});

test("deadline classındaki spanda display için doğru tailwindcss classı kullanılmış mı?", async () => {
  const div = document.querySelectorAll("div>div>span");
  expect(div[0]).toHaveClass("inline-block");
});

test("index.css dosyasında normal ve urgent renkleri themede tanımlanmış mı?", async () => {
  expect(indexCssCode).toMatch(/--color-normal/i);
  expect(indexCssCode).toMatch(/--color-urgent/i);
});

test("index.css dosyasında tailwind satırı eklenmiş mi?", async () => {
  expect(indexCssCode).toMatch(/tailwindcss/i);
});

test("date-fns kütüphanesindeki formatDistanceToNow ve  differenceInDays metodları kullanılmış mı?", async () => {
  expect(taskCode).toMatch(/date-fns/i);
  expect(taskCode).toMatch(/differenceInDays/i);
  expect(taskCode).toMatch(/formatDistanceToNow/i);
  expect(taskCode).toMatch(/locale/i);
});

test("date-fns kütüphanesindeki formatDistanceToNow ile 1 gün kaldı gibi metinler doğru yazdırılıyor mu?", async () => {
  const div = document.querySelectorAll("div>div>span");
  expect(div[0]).toHaveTextContent("4 gün sonra");
});

test("date-fns kütüphanesindeki differenceInDays ile taskin deadlineına kalan gün hesaplanarak doğru class ekleniyor mu?", async () => {
  const div = document.querySelectorAll("div>div>span");
  expect(div[0]).toHaveClass("bg-urgent");
});
