import { BiRocket as ContactIcon } from 'react-icons/bi';
import {
  BsEnvelopeAtFill as EmailIcon,
  BsGithub as GithubIcon,
  // BsInstagram as InstagramIcon,
  // BsLinkedin as LinkedinIcon,
  // BsTwitter as TwitterIcon,
} from 'react-icons/bs';
import {
  // FiBookOpen as LearnIcon,
  FiCoffee as ProjectIcon,
  // FiCpu as DashboardIcon,
  FiPieChart as AnalyticsIcon,
  FiPocket as HomeIcon,
  FiRss as BlogIcon,
  FiUser as ProfileIcon,
} from 'react-icons/fi';
// import { PiChatCircleDotsBold as ChatIcon } from 'react-icons/pi';
import { SiJavascript } from 'react-icons/si';

import { MenuItemProps } from '../types/menu';

const iconSize = 20;

export const MENU_ITEMS: MenuItemProps[] = [
  {
    title: '主页',
    href: '/',
    icon: <HomeIcon size={iconSize} />,
    isShow: true,
    isExternal: false,
    eventName: 'Pages: Home',
    type: 'Pages',
  },
  // {
  //   title: 'Dashboard',
  //   href: '/dashboard',
  //   icon: <DashboardIcon size={iconSize} />,
  //   isShow: true,
  //   isExternal: false,
  //   eventName: 'Pages: Dashboard',
  //   type: 'Pages',
  // },
  {
    title: '项目',
    href: '/projects',
    icon: <ProjectIcon size={iconSize} />,
    isShow: true,
    isExternal: false,
    eventName: 'Pages: Projects',
    type: 'Pages',
  },
  {
    title: '文章',
    href: '/blog',
    icon: <BlogIcon size={iconSize} />,
    isShow: true,
    isExternal: false,
    eventName: 'Pages: Blog',
    type: 'Pages',
  },
  // {
  //   title: 'Learn',
  //   href: '/learn',
  //   icon: <LearnIcon size={iconSize} />,
  //   isShow: true,
  //   isExternal: false,
  //   eventName: 'Pages: Learn',
  //   type: 'Pages',
  // },
  {
    title: '关于',
    href: '/about',
    icon: <ProfileIcon size={iconSize} />,
    isShow: true,
    isExternal: false,
    eventName: 'Pages: About',
    type: 'Pages',
  },
  {
    title: '联系',
    href: '/contact',
    icon: <ContactIcon size={iconSize} />,
    isShow: true,
    isExternal: false,
    eventName: 'Pages: Contact',
    type: 'Pages',
  },
  // {
  //   title: 'Guestbook',
  //   href: '/guestbook',
  //   icon: <ChatIcon size={iconSize} />,
  //   isShow: true,
  //   isExternal: false,
  //   eventName: 'Pages: Chat',
  //   type: 'Pages',
  // },
];

export const MENU_APPS: MenuItemProps[] = [
  {
    title: 'JS Playground',
    href: '/playground',
    icon: <SiJavascript size={iconSize} />,
    isShow: true,
    isExternal: false,
    eventName: 'Pages: Playground',
    type: 'Pages',
  },
];

export const SOCIAL_MEDIA: MenuItemProps[] = [
  {
    title: 'Email',
    href: 'mailto:hexuntao@gmail.com',
    icon: <EmailIcon size={iconSize} />,
    isShow: true,
    isExternal: true,
    eventName: 'Contact: Email',
    className: '!bg-green-600 border border dark:border-neutral-700',
    type: 'Link',
  },
  {
    title: 'Github',
    href: 'https://github.com/hexuntao',
    icon: <GithubIcon size={iconSize} />,
    isShow: true,
    isExternal: true,
    eventName: 'Social: Github',
    className: '!bg-black border border dark:border-neutral-700',
    type: 'Link',
  },
];

export const EXTERNAL_LINKS: MenuItemProps[] = [
  {
    title: '分析',
    href: '',
    icon: <AnalyticsIcon size={iconSize} />,
    isShow: true,
    isExternal: true,
    eventName: 'External Link: Analytics',
    type: 'Link',
  },
];
