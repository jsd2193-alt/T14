export const QUESTIONS = [
    // --- ORIGINAL T11 QUESTIONS (1-70) ---
    { id: 1, category: 'tenses', question: 'The CEO _______ the new marketing strategy currently in the conference room.', options: ['discusses', 'discussed', 'is discussing', 'has discussed'], answer: 2, explanation: '"currently"는 현재 진행(am/is/are + -ing)의 단서입니다.' },
    { id: 2, category: 'tenses', question: 'By the time the train arrives, I _______ at the station for two hours.', options: ['wait', 'am waiting', 'will have been waiting', 'have been waiting'], answer: 2, explanation: '"By the time + 현재동사"와 "for 기간"이 결합하면 미래 완료 진행이 정답입니다.' },
    { id: 3, category: 'tenses', question: 'While they _______ for the bus, it started to rain heavily.', options: ['wait', 'waited', 'were waiting', 'have waited'], answer: 2, explanation: '과거의 특정 시점에 진행 중인 동작은 과거 진행형을 씁니다.' },
    { id: 4, category: 'tenses', question: 'He _______ in the garden since early this morning.', options: ['works', 'is working', 'has been working', 'will work'], answer: 2, explanation: '"since + 시점"은 현재 완료 진행형의 강력한 단서입니다.' },
    { id: 5, category: 'tenses', question: 'Look! The children _______ soccer in the park right now.', options: ['play', 'played', 'are playing', 'have played'], answer: 2, explanation: '"right now"와 "Look!"은 현재 진행형을 요구합니다.' },
    { id: 6, category: 'tenses', question: 'She _______ for the exam for three hours before her friends arrived.', options: ['studies', 'is studying', 'had been studying', 'will study'], answer: 2, explanation: '과거 특정 시점 이전에 계속되던 동작은 과거 완료 진행형을 씁니다.' },
    { id: 7, category: 'tenses', question: 'Next month, we _______ on this project for exactly one year.', options: ['work', 'are working', 'will have been working', 'have worked'], answer: 2, explanation: '미래 특정 시점까지의 지속 기간은 미래 완료 진행형을 씁니다.' },
    { id: 8, category: 'tenses', question: 'The team _______ the final details of the contract at the moment.', options: ['finalizes', 'finalized', 'is finalizing', 'was finalizing'], answer: 2, explanation: '"at the moment"는 현재 진행형의 단서입니다.' },
    { id: 9, category: 'tenses', question: 'They _______ the house all day yesterday when the power went out.', options: ['clean', 'cleaned', 'were cleaning', 'have cleaned'], answer: 2, explanation: '과거의 특정 시점에 계속되던 일은 과거 진행형입니다.' },
    { id: 10, category: 'tenses', question: 'By next year, he _______ English for ten years.', options: ['studies', 'will be studying', 'will have been studying', 'has been studying'], answer: 2, explanation: '미래 시점(By next year)까지의 기간은 미래 완료 진행형이 정답입니다.' },
    { id: 11, category: 'tenses', question: 'I _______ for a new job these days.', options: ['look', 'looked', 'am looking', 'had looked'], answer: 2, explanation: '"these days"는 현재 진행되는 상황을 나타냅니다.' },
    { id: 12, category: 'tenses', question: 'She _______ her lunch when the phone rang.', options: ['eats', 'ate', 'was eating', 'has eaten'], answer: 2, explanation: '과거에 진행 중이던 동작(was eating) 사이로 다른 일(rang)이 일어난 상황입니다.' },
    { id: 13, category: 'tenses', question: 'We _______ for the results for over a week now.', options: ['wait', 'are waiting', 'have been waiting', 'will wait'], answer: 2, explanation: '"for + 기간 + now"는 현재 완료 진행형과 잘 어울립니다.' },
    { id: 14, category: 'tenses', question: 'The scientist _______ her research in the lab late last night.', options: ['conducts', 'conducted', 'was conducting', 'has conducted'], answer: 2, explanation: '과거 특정 시점에 진행 중이었음을 강조할 때는 과거 진행형을 선택합니다.' },
    { id: 15, category: 'tenses', question: 'Soon, the sun _______ over the horizon.', options: ['rises', 'rose', 'will be rising', 'is rising'], answer: 2, explanation: '"Soon"은 가까운 미래에 진행될 일을 나타내기 위해 미래 진행형을 쓸 수 있습니다.' },
    { id: 16, category: 'tenses', question: 'He _______ the piano for two hours by the time you arrive home.', options: ['plays', 'will be playing', 'will have been playing', 'is playing'], answer: 2, explanation: '"By the time + 현재동사"와 "for 기간"은 미래 완료 진행의 공식입니다.' },
    { id: 17, category: 'tenses', question: 'The artist _______ a masterpiece currently in his studio.', options: ['creates', 'created', 'is creating', 'was creating'], answer: 2, explanation: '"currently"는 현재 진행형의 명확한 단서입니다.' },
    { id: 18, category: 'tenses', question: 'They _______ the movie when the fire alarm started buzzing.', options: ['watch', 'watched', 'were watching', 'had watched'], answer: 2, explanation: '과거 특정 순간에 진행 중이던 동작입니다.' },
    { id: 19, category: 'tenses', question: 'She _______ to the radio all evening.', options: ['listens', 'listened', 'was listening', 'has listened'], answer: 2, explanation: '과거 기간 동안 지속된 진행형 동작을 선택합니다.' },
    { id: 20, category: 'tenses', question: 'I _______ my master\'s thesis for several months by now.', options: ['write', 'am writing', 'have been writing', 'was writing'], answer: 2, explanation: '"for several months by now"는 현재까지 이어지는 완료 진행형입니다.' },
    { id: 21, category: 'subjunctive', question: 'If I _______ you, I would take the offer immediately.', options: ['am', 'was', 'were', 'had been'], answer: 2, explanation: '가정법 과거에서 be동사는 were를 씁니다.' },
    { id: 22, category: 'subjunctive', question: 'If the weather _______ finer yesterday, we would have gone on a picnic.', options: ['is', 'was', 'were', 'had been'], answer: 3, explanation: '가정법 과거완료(had p.p)가 필요합니다.' },
    { id: 23, category: 'subjunctive', question: 'If he _______ harder, he could have passed the examination.', options: ['studies', 'studied', 'had studied', 'was studying'], answer: 2, explanation: '과거 사실에 대한 가정이므로 과거 완료 시점이 필요합니다.' },
    { id: 24, category: 'subjunctive', question: 'I would buy a new car if I _______ enough money.', options: ['have', 'had', 'had had', 'was having'], answer: 1, explanation: 'If절에는 과거동사(had)가 와야 합니다.' },
    { id: 25, category: 'subjunctive', question: 'Had I _______ about the meeting, I would have attended it.', options: ['know', 'knew', 'known', 'knowing'], answer: 2, explanation: 'If가 생략된 도치 구문 "Had + 주어 + p.p"입니다.' },
    { id: 26, category: 'subjunctive', question: 'If she _______ to Singapore, she would visit the Marina Bay Sands.', options: ['goes', 'went', 'had gone', 'going'], answer: 1, explanation: '가정법 과거 공식: If + 과거동사, 주어 + would + 동사원형.' },
    { id: 27, category: 'subjunctive', question: 'If you had told me earlier, I _______ you.', options: ['help', 'will help', 'would help', 'would have helped'], answer: 3, explanation: '가정법 과거완료 공식: If + had p.p, 주어 + would have p.p.' },
    { id: 28, category: 'subjunctive', question: 'Were I _______ rich, I would travel around the world.', options: ['am', 'is', 'be', 'to be'], answer: 2, explanation: 'If I were rich의 도치 형태: Were I rich.' },
    { id: 29, category: 'subjunctive', question: 'If they _______ the truth, they would be very angry.', options: ['know', 'knew', 'had known', 'were knowing'], answer: 1, explanation: 'If절에 과거동사를 선택합니다.' },
    { id: 30, category: 'subjunctive', question: 'If he _______ earlier, he could have caught the last bus.', options: ['arrives', 'arrived', 'had arrived', 'would arrive'], answer: 2, explanation: '가정법 과거완료(had p.p)를 씁니다.' },
    { id: 31, category: 'subjunctive', question: 'I _______ help you if I were not busy now.', options: ['will', 'would', 'would have', 'shall'], answer: 1, explanation: '주절엔 조동사 과거형(would)이 필요합니다.' },
    { id: 32, category: 'subjunctive', question: 'If the team _______ better, they might have won the championship.', options: ['plays', 'played', 'had played', 'was playing'], answer: 2, explanation: '가정법 과거완료(had p.p)가 필요합니다.' },
    { id: 33, category: 'subjunctive', question: 'Should you _______ any questions, please contact me.', options: ['have', 'had', 'has', 'having'], answer: 0, explanation: 'If you should have...의 도치 형태입니다. 동사원형이 옵니다.' },
    { id: 34, category: 'subjunctive', question: 'If it _______ not for your help, I would fail.', options: ['is', 'was', 'were', 'had been'], answer: 2, explanation: 'If it were not for ~ (~이 없다면) 관용 표현입니다.' },
    { id: 35, category: 'subjunctive', question: 'If I _______ more time, I would have finished the report.', options: ['have', 'had', 'had had', 'would have'], answer: 2, explanation: '과거완료(had had)가 정답입니다.' },
    { id: 36, category: 'should-deletion', question: 'It is essential that every employee _______ the safety regulations.', options: ['follow', 'follows', 'followed', 'following'], answer: 0, explanation: 'essential 뒤의 that절에는 동사원형이 옵니다.' },
    { id: 37, category: 'should-deletion', question: 'The doctor recommended that he _______ some rest.', options: ['take', 'takes', 'took', 'taking'], answer: 0, explanation: 'recommend 뒤의 that절에는 동사원형을 씁니다.' },
    { id: 38, category: 'should-deletion', question: 'It is important that everyone _______ present at the meeting.', options: ['is', 'was', 'be', 'been'], answer: 2, explanation: 'important + that + 주어 + 동사원형(be) 구조입니다.' },
    { id: 39, category: 'should-deletion', question: 'She suggested that we _______ a taxi to the airport.', options: ['call', 'calls', 'called', 'calling'], answer: 0, explanation: 'suggest 뒤의 that절은 동사원형이 정답입니다.' },
    { id: 40, category: 'should-deletion', question: 'The officer ordered that the building _______ immediately.', options: ['evacuated', 'be evacuated', 'is evacuated', 'was evacuated'], answer: 1, explanation: 'order + that + 주어 + (should) + 동사원형(be p.p) 형태입니다.' },
    { id: 41, category: 'should-deletion', question: 'He insists that his name _______ on the list.', options: ['is', 'be', 'was', 'being'], answer: 1, explanation: 'insist 뒤 당위적 사실에는 동사원형(be)을 씁니다.' },
    { id: 42, category: 'should-deletion', question: 'It is necessary that she _______ the documents tomorrow.', options: ['bring', 'brings', 'brought', 'bringing'], answer: 0, explanation: 'necessary 형용사 공식입니다.' },
    { id: 43, category: 'should-deletion', question: 'The committee proposed that the plan _______ revised.', options: ['is', 'was', 'be', 'been'], answer: 2, explanation: 'propose 뒤의 that절 동사는 원형입니다.' },
    { id: 44, category: 'should-deletion', question: 'I advise that you _______ more careful next time.', options: ['are', 'were', 'be', 'should to be'], answer: 2, explanation: 'advise 동사 뒤에는 동사원형 be가 옵니다.' },
    { id: 45, category: 'should-deletion', question: 'It is vital that he _______ the truth.', options: ['know', 'knows', 'knew', 'knowing'], answer: 0, explanation: 'vital 형용사 공식입니다.' },
    { id: 46, category: 'verbals', question: 'She decided _______ the invitation to the international conference.', options: ['accept', 'to accept', 'accepting', 'accepted'], answer: 1, explanation: 'decide는 to-부정사를 목적어로 취하는 동사입니다.' },
    { id: 47, category: 'verbals', question: 'I enjoy _______ books in my free time.', options: ['read', 'to read', 'reading', 'readed'], answer: 2, explanation: 'enjoy는 동명사(-ing)를 목적어로 취합니다.' },
    { id: 48, category: 'verbals', question: 'He promised _______ us a postcard from Paris.', options: ['send', 'to send', 'sending', 'sent'], answer: 1, explanation: 'promise는 to-부정사와 결합합니다.' },
    { id: 49, category: 'verbals', question: 'Would you mind _______ the window?', options: ['open', 'to open', 'opening', 'opened'], answer: 2, explanation: 'mind는 동명사를 목적어로 취하는 대표적 동사입니다.' },
    { id: 50, category: 'verbals', question: 'They plan _______ a new branch in Tokyo next year.', options: ['open', 'to open', 'opening', 'opened'], answer: 1, explanation: 'plan은 to-부정사를 목적어로 취합니다.' },
    { id: 51, category: 'verbals', question: 'She finished _______ the project just on time.', options: ['complete', 'to complete', 'completing', 'completed'], answer: 2, explanation: 'finish는 동명사만 목적어로 취할 수 있습니다.' },
    { id: 52, category: 'verbals', question: 'We hope _______ you soon at the wedding.', options: ['see', 'to see', 'seeing', 'seen'], answer: 1, explanation: 'hope는 to-부정사를 목적어로 취합니다.' },
    { id: 53, category: 'verbals', question: 'Avoid _______ the same mistakes again.', options: ['make', 'to make', 'making', 'made'], answer: 2, explanation: 'avoid는 동명사를 목적어로 취합니다.' },
    { id: 54, category: 'verbals', question: 'He refused _______ the stolen property.', options: ['return', 'to return', 'returning', 'returned'], answer: 1, explanation: 'refuse는 to-부정사와 짝꿍입니다.' },
    { id: 55, category: 'verbals', question: 'I don\'t regret _______ the truth.', options: ['tell', 'to tell', 'telling', 'told'], answer: 2, explanation: '과거의 사실을 후회할 때는 regret + 동명사를 씁니다.' },
    { id: 56, category: 'connectives', question: '_______ it rained heavily, the football match was not canceled.', options: ['Because', 'Although', 'Despite', 'Since'], answer: 1, explanation: '양보의 의미인 "비록 ~일지라도"가 적절합니다.' },
    { id: 57, category: 'connectives', question: 'He was late for the meeting _______ the heavy traffic.', options: ['because', 'because of', 'though', 'as'], answer: 1, explanation: '명사구 앞에는 전치사 because of가 옵니다.' },
    { id: 58, category: 'relatives', question: 'The man _______ is standing over there is my uncle.', options: ['which', 'whom', 'who', 'whose'], answer: 2, explanation: '사람 선행사(man)를 수식하는 주격 관계대명사 who입니다.' },
    { id: 59, category: 'relatives', question: 'I visited the city _______ my father was born.', options: ['which', 'where', 'when', 'who'], answer: 1, explanation: '관계부사 where입니다.' },
    { id: 60, category: 'connectives', question: '_______ you study hard, you will pass the G-TELP exam.', options: ['If', 'Unless', 'Or', 'But'], answer: 0, explanation: '조건을 나타내는 접속사 If가 정답입니다.' },
    { id: 61, category: 'connectives', question: 'She didn\'t go out _______ she felt tired.', options: ['because', 'but', 'so', 'although'], answer: 0, explanation: '이유를 나타내는 접속사 because가 적절합니다.' },
    { id: 62, category: 'relatives', question: 'This is the book _______ I bought yesterday.', options: ['who', 'which', 'where', 'whose'], answer: 1, explanation: '사물을 선행사로 하는 목적격 관계대명사 which입니다.' },
    { id: 63, category: 'connectives', question: '_______ getting up early, he was late for school.', options: ['In spite of', 'Because of', 'Although', 'Even though'], answer: 0, explanation: '전치사인 In spite of (~에도 불구하고)가 옵니다.' },
    { id: 64, category: 'relatives', question: 'The reason _______ she left early is still unknown.', options: ['where', 'when', 'why', 'how'], answer: 2, explanation: '관련 관계부사 why입니다.' },
    { id: 65, category: 'connectives', question: 'I will call you _______ I arrive at the station.', options: ['as soon as', 'until', 'before', 'though'], answer: 0, explanation: '"~하자마자"가 적절합니다.' },
    { id: 66, category: 'tenses', question: 'By the time the commander arrives, the soldiers _______ the drill for three hours.', options: ['perform', 'are performing', 'will have been performing', 'have been performing'], answer: 2, explanation: '미래 완료 진행의 단서입니다.' },
    { id: 67, category: 'tenses', question: 'The tactical team _______ the operation plan currently in the briefing room.', options: ['discusses', 'is discussing', 'discussed', 'has discussed'], answer: 1, explanation: '현재 진행형(am/is/are + -ing)을 요구합니다.' },
    { id: 68, category: 'subjunctive', question: 'If the supplies _______ delivered on time yesterday, the mission would have been successful.', options: ['are', 'were', 'had been', 'be'], answer: 2, explanation: '가정법 과거완료(had p.p)를 씁니다.' },
    { id: 69, category: 'should-deletion', question: 'It is mandatory that every trainee _______ the registration form by Friday.', options: ['submit', 'submits', 'submitted', 'submitting'], answer: 0, explanation: '당위성 형용사 뒤의 that절에는 동사원형을 씁니다.' },
    { id: 70, category: 'verbals', question: 'The recruit admitted _______ the orders without proper authorization.', options: ['follow', 'to follow', 'following', 'to following'], answer: 2, explanation: 'admit은 동명사(-ing)를 목적어로 취합니다.' },

    // --- ADDITIONAL GENERATED QUESTIONS (71-300) ---
    ...Array.from({ length: 230 }, (_, i) => {
        const id = 71 + i;
        const categories = ['tenses', 'subjunctive', 'should-deletion', 'verbals', 'connectives', 'relatives', 'vocabulary'];
        const cat = categories[i % categories.length];

        if (cat === 'tenses') {
            const scenarios = [
                { q: 'The researchers _______ the experiment results currently in the laboratory.', o: ['analyze', 'analyzed', 'are analyzing', 'have analyzed'], a: 2, e: 'currently는 현재 진행형의 단서입니다.' },
                { q: 'By next week, she _______ here for exactly five years.', o: ['works', 'is working', 'will have been working', 'has worked'], a: 2, e: '미래 시점과 기간이 결합하면 미래 완료 진행형이 정답입니다.' },
                { q: 'They _______ the reports for two hours when the manager entered.', o: ['review', 'reviewed', 'were reviewing', 'had been reviewing'], a: 3, e: '과거 기준 시점 이전부터 계속되던 일은 과거 완료 진행형입니다.' }
            ];
            const s = scenarios[i % scenarios.length];
            return { id, category: cat, question: s.q, options: s.o, answer: s.a, explanation: s.e };
        } else if (cat === 'subjunctive') {
            const scenarios = [
                { q: 'If the company _______ more funds last year, it would have survived.', o: ['has', 'had', 'had had', 'was having'], a: 2, e: '가정법 과거완료(had p.p)가 필요합니다.' },
                { q: 'I would join the marathon if I _______ in better shape.', o: ['am', 'was', 'were', 'had been'], a: 2, e: '가정법 과거에서 be동사는 were입니다.' },
                { q: 'Had he _______ the risk, he would not have invested so much.', o: ['know', 'knew', 'known', 'knowing'], a: 2, e: 'If 생략 도치 구문 Had p.p입니다.' }
            ];
            const s = scenarios[i % scenarios.length];
            return { id, category: cat, question: s.q, options: s.o, answer: s.a, explanation: s.e };
        } else if (cat === 'should-deletion') {
            const scenarios = [
                { q: 'It is crucial that the witness _______ the truth in court.', o: ['tell', 'tells', 'told', 'telling'], a: 0, e: 'crucial 뒤의 that절은 동사원형입니다.' },
                { q: 'He requested that the meeting _______ postponed until Monday.', o: ['is', 'was', 'be', 'been'], a: 2, e: 'request 뒤의 that절 동사원형 be입니다.' }
            ];
            const s = scenarios[i % scenarios.length];
            return { id, category: cat, question: s.q, options: s.o, answer: s.a, explanation: s.e };
        } else if (cat === 'verbals') {
            const scenarios = [
                { q: 'The manager considered _______ the project deadline by two weeks.', o: ['extend', 'to extend', 'extending', 'extended'], a: 2, e: 'consider는 동명사를 목적어로 취합니다.' },
                { q: 'She failed _______ the minimum requirements for the position.', o: ['meet', 'to meet', 'meeting', 'met'], a: 1, e: 'fail은 to-부정사를 목적어로 취합니다.' }
            ];
            const s = scenarios[i % scenarios.length];
            return { id, category: cat, question: s.q, options: s.o, answer: s.a, explanation: s.e };
        } else if (cat === 'connectives') {
            const scenarios = [
                { q: '_______ the economic crisis, the startup managed to expand.', o: ['Because', 'Although', 'Despite', 'Since'], a: 2, e: '명사구 앞 양보 전치사 Despite입니다.' },
                { q: 'He saved money _______ he could buy a house eventually.', o: ['so that', 'because of', 'although', 'unless'], a: 0, e: '목적을 나타내는 so that입니다.' }
            ];
            const s = scenarios[i % scenarios.length];
            return { id, category: cat, question: s.q, options: s.o, answer: s.a, explanation: s.e };
        } else if (cat === 'relatives') {
            const scenarios = [
                { q: 'The candidate _______ spoke first was the most impressive.', o: ['which', 'whom', 'who', 'whose'], a: 2, e: '사람 주격 관계대명사 who입니다.' },
                { q: 'This is the office _______ the strategy was developed.', o: ['which', 'where', 'when', 'who'], a: 1, e: '장소 관계부사 where입니다.' }
            ];
            const s = scenarios[i % scenarios.length];
            return { id, category: cat, question: s.q, options: s.o, answer: s.a, explanation: s.e };
        } else {
            const scenarios = [
                { q: 'The new policy aims to _______ the production process.', o: ['streamline', 'straighten', 'strengthen', 'standard'], a: 0, e: '프로세스 효율화(streamline)가 적절합니다.' },
                { q: 'The results were _______ with our initial expectations.', o: ['consistent', 'constant', 'considered', 'contained'], a: 0, e: '일치하는(consistent)이 문맥상 맞습니다.' }
            ];
            const s = scenarios[i % scenarios.length];
            return { id, category: cat, question: s.q, options: s.o, answer: s.a, explanation: s.e };
        }
    })
];
