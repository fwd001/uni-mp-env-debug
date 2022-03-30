/*
 * @Author: wedong.fu
 * @Date: 2021-08-02 14:49:39
 * @LastEditors: wedong.fu
 * @LastEditTime: 2022-03-30 17:47:58
 * @Description: 请填写简介
 */
module.exports = {
  title: 'HLL Uniapp',
  description: 'Uniapp小程序',
  head: [
    ['link', { rel: 'icon', href: 'https://www.xxx.cn/favicon.ico' }]
  ],
  plugins: [
    '@vuepress/back-to-top'
  ],
  themeConfig: {
    logo: 'https://www.xxx.cn/rs/img/img_nav_logo.png',
    lastUpdated: '更新时间',
    nav: [
      { text: '首页', link: '/' },
      { text: 'Uni-ui', link: '/uni-ui/guide/start' },
      { text: 'Uni-business', link: '/uni-business/guide/start' }
    ],
    sidebar: {
      '/uni-ui/': [
        'guide/start',
        'guide/update',
        {
          title: 'uni-ui 组件',
          collapsable: false,
          sidebarDepth: 3,
          children: [
            {
              title: '基础组件',
              collapsable: false,
              children: [
                'components/button',
                'components/cell',
                'components/icon',
                'components/transition',
                'components/mask',
              ]
            },
            {
              title: '表单组件',
              collapsable: false,
              children: [
                'components/checkbox',
                'components/radio',
                'components/switch',
              ]
            },
            {
              title: '反馈组件',
              collapsable: false,
              children: [
                'components/dialog',
                'components/loading',
                'components/popup',
                'components/toast',
              ]
            },
          ]
        }
      ],
      '/uni-business/': [
        'guide/start',
        'guide/update',
        {
          title: 'uni-business 业务组件',
          collapsable: false,
          sidebarDepth: 3,
          children: [
            {
              title: '业务组件',
              collapsable: false,
              children: [
                'components/address-info',
              ]
            },
          ]
        }
      ]
    }
  }
}