import { createStore } from 'vuex';

export default createStore({
  state: {
    questions: [
      {
        question:
          'A 36in diameter circular pipe is flowing at 70% capacity. What is the flow area available for the pipe at 70% capacity?',
        answers: ['7.1 ft2', '5.3 ft2', '4.9 ft2', '4.3 ft2'],
        correctAnswer: '5.3 ft2',
      },
      {
        question:
          'An 18 in diameter circular pipe flowing full has a velocity of 2.5 ft/sec. The pipe expands to a 30 in diameter circular pipe 200 ft downstream. What is the velocity in the 30 in pipe section assuming the pipe is still flowing full?',
        answers: ['0.62 ft/sec', '0.32 ft/sec', '0.90 ft/sec', '0.54 ft/sec'],
        correctAnswer: '0.54 ft/sec',
      },
    ],
  },
  mutations: {},
  actions: {},
  modules: {},
});
