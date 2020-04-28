export default {
  formTitle: 'Example form',
  configurationPanelMode: null,
  configurationPanelGroupId: null,
  // formGroups: [],
  formGroups: [
    {
      id: 'xxx',
      label: 'test group',
      fields: [
        {
          id: 'yyy',
          type: 'singleLineText',
          placeholder: 'Test input 1',
        },
        {
          id: 'zzz',
          type: 'singleLineText',
          placeholder: 'Test input 2',
        },
        {
          id: 'qqq',
          type: 'singleLineText',
          placeholder: 'Test input 3',
        },
      ],
    },
  ],
}
