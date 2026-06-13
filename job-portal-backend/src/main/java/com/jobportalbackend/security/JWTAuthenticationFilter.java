package com.jobportalbackend.security;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;
import java.util.Date;

@Component
public class JWTAuthenticationFilter extends OncePerRequestFilter {
    @Autowired
    private JWTUtils jwtUtils;

    @Autowired
    private UserDetailsService userDetailsService;


    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
        String jwt = jwtUtils.getJwtFromHeader(request);
       try{
           if (jwt!=null){
               String username = jwtUtils.getUsernameFromToken(jwt);
               if (username!=null&& SecurityContextHolder.getContext().getAuthentication()==null){
                   UserDetails userDetails = userDetailsService.loadUserByUsername(username);
                   if (jwtUtils.validateToken(jwt, userDetails.getUsername())){
                       UsernamePasswordAuthenticationToken authenticationToken =
                               new UsernamePasswordAuthenticationToken(
                                       userDetails,
                                       null,
                                       userDetails.getAuthorities()
                               );
                       authenticationToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
                       SecurityContextHolder.getContext().setAuthentication(authenticationToken);
                   }
               }
           }
       }catch (Exception e){
           logger.error("Cannot set user authentication: {}");
       }
        filterChain.doFilter(request, response);
    }
}
