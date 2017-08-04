package com.gt.mall.bean;

import java.io.Serializable;

public class BusFlow implements Serializable{
    /**
	 * 
	 */
	private static final long serialVersionUID = -616866489889905738L;

	/**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column t_wx_bus_flow.id
     *
     * @mbggenerated Tue Jan 26 10:58:40 CST 2016
     */
    private Integer id;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column t_wx_bus_flow.bus_id
     *
     * @mbggenerated Tue Jan 26 10:58:40 CST 2016
     */
    private Integer busId;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column t_wx_bus_flow.operate_type
     *
     * @mbggenerated Tue Jan 26 10:58:40 CST 2016
     */
    private Integer operateType;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column t_wx_bus_flow.type
     *
     * @mbggenerated Tue Jan 26 10:58:40 CST 2016
     */
    private Integer type;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column t_wx_bus_flow.count
     *
     * @mbggenerated Tue Jan 26 10:58:40 CST 2016
     */
    private Integer count;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column t_wx_bus_flow.scope
     *
     * @mbggenerated Tue Jan 26 10:58:40 CST 2016
     */
    private Integer scope;

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column t_wx_bus_flow.id
     *
     * @return the value of t_wx_bus_flow.id
     *
     * @mbggenerated Tue Jan 26 10:58:40 CST 2016
     */
    public Integer getId() {
        return id;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column t_wx_bus_flow.id
     *
     * @param id the value for t_wx_bus_flow.id
     *
     * @mbggenerated Tue Jan 26 10:58:40 CST 2016
     */
    public void setId(Integer id) {
        this.id = id;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column t_wx_bus_flow.bus_id
     *
     * @return the value of t_wx_bus_flow.bus_id
     *
     * @mbggenerated Tue Jan 26 10:58:40 CST 2016
     */
    public Integer getBusId() {
        return busId;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column t_wx_bus_flow.bus_id
     *
     * @param busId the value for t_wx_bus_flow.bus_id
     *
     * @mbggenerated Tue Jan 26 10:58:40 CST 2016
     */
    public void setBusId(Integer busId) {
        this.busId = busId;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column t_wx_bus_flow.operate_type
     *
     * @return the value of t_wx_bus_flow.operate_type
     *
     * @mbggenerated Tue Jan 26 10:58:40 CST 2016
     */
    public Integer getOperateType() {
        return operateType;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column t_wx_bus_flow.operate_type
     *
     * @param operateType the value for t_wx_bus_flow.operate_type
     *
     * @mbggenerated Tue Jan 26 10:58:40 CST 2016
     */
    public void setOperateType(Integer operateType) {
        this.operateType = operateType;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column t_wx_bus_flow.type
     *
     * @return the value of t_wx_bus_flow.type
     *
     * @mbggenerated Tue Jan 26 10:58:40 CST 2016
     */
    public Integer getType() {
        return type;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column t_wx_bus_flow.type
     *
     * @param type the value for t_wx_bus_flow.type
     *
     * @mbggenerated Tue Jan 26 10:58:40 CST 2016
     */
    public void setType(Integer type) {
        this.type = type;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column t_wx_bus_flow.count
     *
     * @return the value of t_wx_bus_flow.count
     *
     * @mbggenerated Tue Jan 26 10:58:40 CST 2016
     */
    public Integer getCount() {
        return count;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column t_wx_bus_flow.count
     *
     * @param count the value for t_wx_bus_flow.count
     *
     * @mbggenerated Tue Jan 26 10:58:40 CST 2016
     */
    public void setCount(Integer count) {
        this.count = count;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column t_wx_bus_flow.scope
     *
     * @return the value of t_wx_bus_flow.scope
     *
     * @mbggenerated Tue Jan 26 10:58:40 CST 2016
     */
    public Integer getScope() {
        return scope;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column t_wx_bus_flow.scope
     *
     * @param scope the value for t_wx_bus_flow.scope
     *
     * @mbggenerated Tue Jan 26 10:58:40 CST 2016
     */
    public void setScope(Integer scope) {
        this.scope = scope;
    }
}