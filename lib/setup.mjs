import { promises as fs } from 'fs';
import path from 'path';
import dotenv from 'dotenv';

const template = `---
title: 'Hello, World!'
publishedAt: '2023-01-01'
summary: 'This is your first blog post.'
---

Hello, World!`;

const homePage = `
import Image from 'next/image';
import { Suspense } from 'react';
import doccstat from 'lib/doccstat.jpg';

function ChannelLink({ img, link, name }) {
  return (
    <a
      href={link}
      target="_blank"
      className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded flex items-center justify-between px-3 py-4 w-full"
    >
      <div className="flex items-center space-x-3">
        <div className="relative h-16">
          <Image
            alt={name}
            src={img}
            height={64}
            width={64}
            sizes="33vw"
            className="rounded-full h-16 w-16"
          />
        </div>
        <div className="flex flex-col">
          <p className="font-bold text-neutral-900 dark:text-neutral-100">
            {name}
          </p>
          <p className="text-neutral-600 dark:text-neutral-400">
            Available on CRAN, r-universe and GitHub
          </p>
        </div>
      </div>
      <div className="text-neutral-700 dark:text-neutral-300">
        <ArrowIcon />
      </div>
    </a>
  );
}

function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function Page() {
  return (
    <section>
      <h1 className="font-bold text-2xl mb-8 tracking-tighter">hi there 👋</h1>
      <p className="prose prose-neutral dark:prose-invert">
        I am a fourth year PhD student in Statistics at Texas A&M University.
        You can also call me Anthony. I am working on Change Point Detection
        advised by <a href="https://zhangxiany-tamu.github.io/">Dr. Xianyang Zhang</a>.
      </p>
      <div className="flex items-start md:items-center my-8 flex-col md:flex-row">
        <Image
          alt="Xingchi Li"
          className="rounded-full"
          src={doccstat}
          placeholder="blur"
          width={100}
          priority
        />
        <div className="mt-8 md:mt-0 ml-0 md:ml-6 space-y-2 text-neutral-500 dark:text-neutral-400">
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="mailto:anthony.li@stat.tamu.edu"
            className="flex items-center gap-2"
          >
            <img src="https://img.shields.io/badge/-anthony.li@stat.tamu.edu-c14438?style=flat&logo=Gmail&logoColor=white&link=mailto:anthony.li@stat.tamu.edu" alt="Gmail Badge" />
          </a>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/doccstat/"
            className="flex items-center gap-2"
          >
            <img src="https://img.shields.io/badge/-doccstat-0072b1?style=flat&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/doccstat/" alt="Linkedin Badge" />
          </a>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.github.com/doccstat/"
            className="flex items-center gap-2"
          >
            <img src="https://img.shields.io/badge/-doccstat-grey?style=flat&logo=github&logoColor=white&link=https://github.com/doccstat/" alt="Github Badge" />
          </a>
        </div>
      </div>
      <div className="my-8 flex flex-col sm:flex-row space-x-0 sm:space-x-4 space-y-4 sm:space-y-0 w-full">
        <ChannelLink
          img="https://fastcpd.xingchi.li/logo.svg"
          name="fastcpd: Fast Change Point Detection via Sequential Gradient Descent"
          link="https://fastcpd.xingchi.li"
        />
      </div>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          <ul>
            <li>🔭 I'm working on Change Point Detection</li>
            <li>🌱 I'm learning C++</li>
            <li>💬 Ask me about souls-like games</li>
            <li>😄 Pronouns: he/him/his</li>
          </ul>
        </p>
        <p>
          Projects I've been working on:
        </p>
      </div>
      <div className="my-4 flex flex-row space-x-2 w-full overflow-x-auto">
        <div className="rounded flex items-center justify-between px-3">
          <Image
            alt="fastcpd"
            className="text-neutral-900 dark:text-neutral-100"
            src="https://fastcpd.xingchi.li/logo.svg"
            placeholder="blur"
            width={78}
            height={90}
            priority
          />
        </div>
      </div>
      <h1 className="text-2xl mb-8 tracking-tighter">Education</h1>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          <ul>
            <li>Ph.D. in Statistics, Texas A&M University, 2020 - present</li>
            <li>M.S. in Computer Science, Georgia Institute of Technology, 2019 - 2020</li>
            <li>M.S. in Mathematics, Texas A&M University, 2018 - 2019</li>
            <li>B.S. in Mathematics, Beihang University, 2014 - 2018</li>
          </ul>
        </p>
      </div>
      <h1 className="text-2xl mb-8 tracking-tighter">Publication</h1>
      <div className="my-8 flex flex-col space-y-4 w-full">
        <Suspense>
          <a
            href="https://doi.org/10.6339/22-JDS1067"
            className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50  dark:bg-neutral-800 rounded flex items-center justify-between px-3 py-4 w-full"
          >
            <div className="flex flex-col">
              <p className="font-bold text-neutral-900 dark:text-neutral-100">
                EVIboost for the Estimation of Extreme Value Index Under Heterogeneous Extremes
              </p>
              <p className="text-neutral-600 dark:text-neutral-400">
                Journal of Data Science (2022):1-20
              </p>
            </div>
            <div className="text-neutral-700 dark:text-neutral-300">
              <ArrowIcon />
            </div>
          </a>
        </Suspense>
        <Suspense>
          <a
            href="https://doi.org/10.1007/978-3-319-69781-9_19"
            className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50  dark:bg-neutral-800 rounded flex items-center justify-between px-3 py-4 w-full"
          >
            <div className="flex flex-col">
              <p className="font-bold text-neutral-900 dark:text-neutral-100">
                CI-Bot: a hybrid chatbot enhanced by crowdsourcing
              </p>
              <p className="text-neutral-600 dark:text-neutral-400">
              In Web and Big Data: APWeb-WAIM 2017 International Workshops
              </p>
            </div>
            <div className="text-neutral-700 dark:text-neutral-300">
              <ArrowIcon />
            </div>
          </a>
        </Suspense>
      </div>
      <ul className="flex flex-col md:flex-row mt-8 space-x-0 md:space-x-4 space-y-2 md:space-y-0 font-sm text-neutral-600 dark:text-neutral-300">
        <li>
          <a
            className="flex items-center hover:text-neutral-800 dark:hover:text-neutral-100 transition-all"
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/doccstat"
          >
            <ArrowIcon />
            <p className="h-7 ml-2">follow me on GitHub</p>
          </a>
        </li>
        <li>
          <a
            className="flex items-center hover:text-neutral-800 dark:hover:text-neutral-100 transition-all"
            rel="noopener noreferrer"
            target="_blank"
            href="mailto:anthony.li.at.stat.tamu.edu"
          >
            <ArrowIcon />
            <p className="h-7 ml-2">contact me</p>
          </a>
        </li>
      </ul>
    </section>
  );
}
`;

const deleteFolderRecursive = async (path) => {
  const stat = await fs.stat(path);
  if (stat.isDirectory()) {
    const files = await fs.readdir(path);
    await Promise.all(
      files.map((file) => deleteFolderRecursive(`${path}/${file}`))
    );
    await fs.rmdir(path);
  } else {
    await fs.unlink(path);
  }
};

(async () => {
  dotenv.config();

  if (process.env.IS_TEMPLATE === 'false') {
    // This means it's not the template, it's my legit site
    // I orderride the env variable for my site. This means that when
    // folks clone this repo for the first time, it will delete my personal content
    return;
  }

  const contentDir = path.join(process.cwd(), 'content');
  const imagesDir = path.join(process.cwd(), 'public', 'images');
  const appDir = path.join(process.cwd(), 'app');

  await deleteFolderRecursive(contentDir);
  await deleteFolderRecursive(imagesDir);
  await fs.mkdir(contentDir);
  await fs.writeFile(path.join(contentDir, 'hello-world.mdx'), template);
  await fs.writeFile(path.join(appDir, 'page.tsx'), homePage);
})();
