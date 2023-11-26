import { Form, Input, Select } from 'antd';
import useLanguage from '@/locale/useLanguage';

// Function to generate a unique 6-digit number
function generateUniqueSixDigitNumber() {
  const min = 100000; // 6-digit number
  const max = 999999;
  return String(Math.floor(Math.random() * (max - min + 1)) + min);
}

export default function LeadForm() {
  const translate = useLanguage();

  return (
    <>
      <Form.Item
        label={translate('Student ID')}
        name="studentid"
        initialValue={generateUniqueSixDigitNumber()} // Generates a unique 6-digit number
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input disabled />
      </Form.Item>

      <Form.Item
        label={translate('student name')}
        name="studentname"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label={translate('phone')}
        name="phone"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input type="tel" />
      </Form.Item>

      <Form.Item
        label={translate('email')}
        name="email"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label={translate('Course')}
        name="coursename"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>


      <Form.Item
        label={translate('Session')}
        name="session"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label={translate('University')}
        name="university"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item label={translate('State')} name="state">
        <Input />
      </Form.Item>

      <Form.Item label={translate('Lms')} name="lms">
        <Input />
      </Form.Item>

      <Form.Item
        label={translate('status')}
        name="status"
        rules={[
          {
            required: false,
          },
        ]}
        initialValue={'new'}
      >
        <Select
          options={[
            { value: 'new', label: translate('new') },
            { value: 'reached', label: translate('reached') },
            { value: 'interested', label: translate('interested') },
            { value: 'not interested', label: translate('not interested') },
          ]}
        ></Select>
      </Form.Item>

      <Form.Item label={translate('note')} name="note">
        <Input />
      </Form.Item>

      <Form.Item label={translate('source')} name="source">
        <Input placeholder="ex: linkedin, website, ads..." />
      </Form.Item>
    </>
  );
}
