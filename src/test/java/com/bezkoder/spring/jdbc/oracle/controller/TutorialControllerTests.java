package com.bezkoder.spring.jdbc.oracle.controller;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

import com.bezkoder.spring.jdbc.oracle.repository.TutorialRepository;

// @SpringBootTest(classes = com.bezkoder.spring.jdbc.oracle.controller.TutorialController.class)
// @AutoConfigureMockMvc
@WebMvcTest(TutorialController.class)
public class TutorialControllerTests {
    // @Test
    // void tutorial_test(@Autowired MockMvc mvc) throws Exception {
    //     mvc.perform(
    //             MockMvcRequestBuilders.get("/api/tutorials"))
    //             .andExpect(MockMvcResultMatchers.status().isOk())
    //             .andExpect(MockMvcResultMatchers.content().string("tutorial"));
    // }
    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private TutorialRepository tutorialRepository;

    @Test
    void test() throws Exception {
        // when(userMapper.findAll()).thenReturn(new ArrayList<>());
        mockMvc.perform(MockMvcRequestBuilders.get("/api/tutorials"))
                .andExpect(MockMvcResultMatchers.status().is(204));
//                .andExpect(MockMvcResultMatchers.content().string("[]"));
    }
}