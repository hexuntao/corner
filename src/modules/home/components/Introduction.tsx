const Introduction = () => {
  return (
    <section className='bg-cover bg-no-repeat '>
      <div className='space-y-3'>
        <div className='flex gap-2  text-2xl font-medium lg:text-3xl'>
          <h1>Hi, I&apos;m Tao</h1>{' '}
          <div className='ml-1 animate-waving-hand'>👋</div>
        </div>
        <div className='space-y-4'>
          <ul className='ml-5 flex list-disc flex-col gap-1 text-neutral-700 dark:text-neutral-400 lg:flex-row lg:gap-10'>
            <li>
              广州 · 中国 <span className='ml-1'>🇨🇳</span>
            </li>
            <li>远程办公</li>
          </ul>
        </div>
      </div>

      <p className='mt-6 leading-[1.8] text-neutral-800 dark:text-neutral-300 md:leading-loose'>
        经验丰富的TS全栈工程师，尤其擅长前端开发，热衷于打造像素级完美的网页体验。我精通
        JavaScript，专精于所有与 Web
        相关的技术。我乐于与团队协作，交付高效、可扩展且美观的 Web 应用程序。
      </p>
    </section>
  );
};

export default Introduction;
