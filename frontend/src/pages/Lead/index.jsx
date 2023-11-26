import dayjs from 'dayjs';
import { Tag } from 'antd';

import CrudModule from '@/modules/CrudModule/CrudModule';
import LeadForm from '@/forms/LeadForm';

import useLanguage from '@/locale/useLanguage';

export default function Lead() {
  const translate = useLanguage();
  const entity = 'lead';
  const searchConfig = {
    displayLabels: ['studentname', 'company'],
    searchFields: 'studentname,company',
    outputValue: '_id',
  };
  const entityDisplayLabels = ['number', 'company'];

  const readColumns = [

    {
      title: translate('University Name'),
      dataIndex: 'university',
    },

    {
      title: translate('Want to Send'),
      dataIndex: 'wantsend',
    },
    {
      title: translate('StudentID'),
      dataIndex: 'studentid',
    },
    {
      title: translate('Student Name'),
      dataIndex: 'studentname',
    },

    {
      title: translate('Father Name'),
      dataIndex: 'fathername',
    },
    {
      title: translate('Mother name'),
      dataIndex: 'mothername',
    },
    {
      title: translate('Email'),
      dataIndex: 'email',
    },
    {
      title: translate('Phone'),
      dataIndex: 'phone',
    },
    {
      title: translate('Dob'),
      dataIndex: 'dob',
    },
    {
      title: translate('Session'),
      dataIndex: 'session',
    },

    {
      title: translate('Session Type'),
      dataIndex: 'sessiontype',
    },

    {
      title: translate('Course Name'),
      dataIndex: 'coursename',
    },

    {
      title: translate('Gender'),
      dataIndex: 'gender',
    },

    {
      title: translate('Specialization '),
      dataIndex: 'specialization ',
    },
    {
      title: translate('Status'),
      dataIndex: 'status',
    },
  ];

  const dataTableColumns = [

    {
      title: 'S.No.',
      dataIndex: '',
      render: (text, record, index) => index + 1,
    },
    {
      title: translate('StudentID'),
      dataIndex: ['studentid'],
    },
    {
      title: translate('Student Name'),
      dataIndex: ['studentname'],
    },
    {
      title: translate('Phone'),
      dataIndex: ['phone'],
    },
    {
      title: translate('Email'),
      dataIndex: ['email'],
    },
    {
      title: translate('Course'),
      dataIndex: ['coursename'],
    },
    {
      title: translate('Session'),
      dataIndex: 'session',
    },
    {
      title: translate('University'),
      dataIndex: ['university'],
    },
    {
      title: translate('State'),
      dataIndex: ['state'],
    },
    {
      title: translate('Lms'),
      dataIndex: ['lms'],
    },
    {
      title: translate('Status'),
      dataIndex: 'status',
      render: (status) => {
        let color =
          status === 'new'
            ? 'cyan'
            : status === 'reached'
              ? 'blue'
              : status === 'interested'
                ? 'green'
                : status === 'not interested'
                  ? 'orange'
                  : 'red';
        return <Tag color={color}>{status && translate(status)}</Tag>;
      },
    },
    {
      title: translate('Created'),
      dataIndex: 'created',
      render: (date) => dayjs(date).format('DD/MM/YYYY'),
    },
  ];

  const Labels = {
    PANEL_TITLE: translate('applications'),
    DATATABLE_TITLE: translate('Applications'),
    ADD_NEW_ENTITY: translate('add_applications'),
    ENTITY_NAME: translate('applications'),
    CREATE_ENTITY: translate('save'),
    UPDATE_ENTITY: translate('update'),
  };
  const configPage = {
    entity,
    ...Labels,
  };
  const config = {
    ...configPage,
    dataTableColumns,
    readColumns,
    searchConfig,
    entityDisplayLabels,
  };
  return (
    <CrudModule
      createForm={<LeadForm />}
      updateForm={<LeadForm isUpdateForm={true} />}
      config={config}
    />
  );
}
