import { render } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
//import { WithPinnedTasks } from './index.stories';
//import * as TaskStories from '../Task/index.stories';
import * as TaskListStories from './index.stories';
//👇 composeStories will process all information related to the component (e.g., args)
const { WithPinnedTasks } = composeStories(TaskListStories);

it('renders pinned tasks at the start of the list', () => {
    // const tasks = [
    //     { ...TaskStories.Default.args.task, id: '1', title: 'Task 1' },
    //     { ...TaskStories.Default.args.task, id: '2', title: 'Task 2' },
    //     { ...TaskStories.Default.args.task, id: '3', title: 'Task 3' },
    //     { ...TaskStories.Default.args.task, id: '4', title: 'Task 4' },
    //     { ...TaskStories.Default.args.task, id: '5', title: 'Task 5' },
    //     { id: '6', title: 'Task 6 (pinned)', state: 'TASK_PINNED' },
    // ];
  const { container } = render(<WithPinnedTasks />);

  expect(
    container.querySelector('.list-item:nth-child(1) input[value="Task 6 (pinned)"]')
  ).not.toBe(null);
});