/**
 * @description: 公司规模
 * @return {*}
 */
export const firmSize = [
  { label: '0-49人', value: 1 },
  { label: '50-99人', value: 2 },
  { label: '100-499人', value: 3 },
  { label: '500-999人', value: 4 },
  { label: '1000-4999人', value: 5 },
  { label: '5000人以上', value: 6 }
]

/**
 * @description: 所属行业
 * @return {*}
 */
export const industry = [
  { label: '零售', value: 1 },
  { label: '制造业', value: 11 },
  { label: '媒体', value: 2 },
  { label: '教育', value: 3 },
  { label: '金融', value: 4 },
  { label: '医疗', value: 5 },
  { label: '互联网', value: 6 },
  { label: '生活服务', value: 7 },
  { label: '人力资源', value: 8 },
  { label: '仓储物流', value: 9 },
  { label: '电子商务', value: 10 }
]

/**
 * @description: 公司性质
 * @return {*}
 */
export const firmProperty = [
  { label: '私营公司', value: 1 },
  { label: '合资公司', value: 2 },
  { label: '外资公司', value: 3 },
  { label: '国有公司', value: 4 },
  { label: '国有控股公司', value: 5 }
]

/**
 * @description: 公司状态
 * @return {*}
 */
export const companyStatus = [
  { label: '停用', value: 0 },
  { label: '启用', value: 1 }
]

/**
 * @description: 投放职位状态
 * @return {*}
 */
export const jobStatus = [
  { label: '停用', value: 0 },
  { label: '启用', value: 1 }
]

/**
 * @description: 学历
 * @return {*}
 */
export const dDegree = [
  {
    code: 0,
    value: '不限'
  },
  {
    code: 9,
    value: '初中'
  },
  {
    code: 7,
    value: '高中'
  },
  {
    code: 13,
    value: '中技'
  },
  {
    code: 12,
    value: '中专'
  },
  {
    code: 5,
    value: '大专'
  },
  {
    code: 4,
    value: '本科'
  },
  {
    code: 3,
    value: '硕士'
  },
  {
    code: 10,
    value: 'MBA'
  },
  {
    code: 11,
    value: 'EMBA'
  },
  {
    code: 1,
    value: '博士'
  },
  {
    code: 8,
    value: '其他'
  }
]

/**
 * @description: 工作经验
 * @return {*}
 */
export const dExpe = [
  {
    code: -1,
    value: '不限'
  },
  {
    code: 100,
    value: '无经验'
  },
  {
    code: 1,
    value: '1年'
  },
  {
    code: 2,
    value: '2年'
  },
  {
    code: 3,
    value: '3年'
  },
  {
    code: 4,
    value: '4年'
  },
  {
    code: 5,
    value: '5年'
  },
  {
    code: 6,
    value: '6年'
  },
  {
    code: 7,
    value: '7年'
  },
  {
    code: 8,
    value: '8年'
  },
  {
    code: 9,
    value: '9年'
  },
  {
    code: 10,
    value: '10年'
  }
]

/**
 * @description: 性别
 * @return {*}
 */
export const dGender = [
  {
    code: 0,
    value: ''
  },
  {
    code: -1,
    value: '不限'
  },
  {
    code: 1,
    value: '男'
  },
  {
    code: 2,
    value: '女'
  }
]

/**
 * @description: 工作职类
 * @return {*}
 */
export const stanDardData = [
  { code: -1, value: '不限' },
  { code: 1, value: '销售' },
  { code: 2, value: '客服' },
  { code: 3, value: '行政' },
  { code: 4, value: '人事' },
  { code: 5, value: '财务' },
  { code: 6, value: '审核' },
  { code: 7, value: '运营' },
  { code: 8, value: '店员' },
  { code: 11, value: '其他' },
  { code: 12, value: '教育' },
  { code: 13, value: '文员' },
  { code: 14, value: '仓储物流' },
  { code: 15, value: '城市经理' },
  { code: 16, value: 'IT' }
]

/**
 * @description: 招聘类型
 * @return {*}
 */
export const jobType = [
  {
    code: 0,
    value: '招聘'
  },
  {
    code: 1,
    value: '外包'
  }
]

/**
 * @description: 工作性质
 * @return {*}
 */
export const jobNature = [
  {
    code: -1,
    value: '不限'
  },
  {
    code: 0,
    value: '全职'
  },
  {
    code: 1,
    value: '兼职'
  },
  {
    code: 2,
    value: '实习'
  }
]

/**
 * @description: 沟通结果 - 评价页面相关字段显示逻辑
 * @return {*}
 */
export const gtResults = [
  { code: 6, value: '接受邀约' }, //显示沟通职位、场次、备注、顾问评价
  { code: 5, value: '待确认' }, //显示沟通职位、顾问评价
  { code: 4, value: '不考虑' }, //显示沟通职位、顾问评价
  { code: 3, value: '岗位不符' }, //显示沟通职位、顾问评价
  { code: 2, value: '已找到工作' }, //显示沟通职位、顾问评价
  { code: 8, value: '未接通' }, //显示沟通职位
  { code: 1, value: '空号' }, //显示沟通职位
  { code: 7, value: '其他' } //显示沟通职位、顾问评价
]
